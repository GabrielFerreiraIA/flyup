export interface LinkItem {
  title: string;
  url: string;
  imageUrl: string;
  borderColor: string;
  action?: 'BOOKING_MODAL' | 'LINK';
  redirectUrl?: string;
}
