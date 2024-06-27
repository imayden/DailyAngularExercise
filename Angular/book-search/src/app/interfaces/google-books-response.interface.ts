export interface GoogleBooksResponseItem {
    volumeInfo: {
      imageLinks?: {
        thumbnail?: string;
      };
      title?: string;
      publisher?: string;
      publishedDate?: string;
      description?: string;
    };
  }
  