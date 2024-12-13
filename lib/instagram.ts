export interface InstagramPost {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
    timestamp: string;
    thumbnail_url?: string;
  }
  
  export async function getInstagramFeed(accessToken: string): Promise<InstagramPost[]> {
    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching Instagram feed:', error);
      return [];
    }
  }