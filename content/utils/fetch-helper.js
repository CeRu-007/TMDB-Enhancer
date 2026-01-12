class FetchHelper {
  static TMDB_API_KEY = '2dca580c2a14b55200e784d157207b4d';
  static TMDB_API_BASE = 'https://api.themoviedb.org/3';

  static async fetchTMDB(endpoint, params = {}) {
    const url = new URL(`${this.TMDB_API_BASE}${endpoint}`);
    url.searchParams.append('api_key', this.TMDB_API_KEY);
    
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, params[key]);
      }
    });

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('TMDB API fetch error:', error);
      throw error;
    }
  }

  static async getMovieDetails(movieId) {
    return this.fetchTMDB(`/movie/${movieId}`, {
      append_to_response: 'credits,videos,similar'
    });
  }

  static async getTVDetails(tvId) {
    return this.fetchTMDB(`/tv/${tvId}`, {
      append_to_response: 'credits,videos,similar'
    });
  }

  static async searchMovie(query) {
    return this.fetchTMDB('/search/movie', { query });
  }

  static async searchTV(query) {
    return this.fetchTMDB('/search/tv', { query });
  }

  static async getUserAccountDetails(sessionId) {
    return this.fetchTMDB('/account', { session_id: sessionId });
  }

  static formatNumber(num) {
    if (!num) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}