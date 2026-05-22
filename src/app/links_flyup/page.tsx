import { Metadata } from 'next';
import LinksClient from '../links/LinksClient';

export const metadata: Metadata = {
  title: 'FlyUp Paraquedismo | Links',
  description: 'Links Oficiais - FlyUp Paraquedismo',
};

export default function LinksInstagramPage() {
  return <LinksClient source="links_instagram" />;
}
