import { NextResponse } from 'next/server'
import { createClient, createServiceClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const body = await request.json()

  const service = createServiceClient()

  const payload = {
    nome: body.nome,
    telefone: body.telefone,
    email: body.email || null,
    experience_id: body.experience_id || null,
    fonte: body.fonte || 'manual',
    fonte_label: body.fonte_label || 'Adicionado Manualmente',
    status: body.status || 'novo',
    temperatura: body.temperatura || 'morno',
    valor_estimado: body.valor_estimado || 0,
    notas: body.notas || null,
  }

  const { data, error } = await service
    .from('leads')
    .insert([payload])
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
