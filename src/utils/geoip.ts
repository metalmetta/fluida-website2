interface GeoIPResponse {
  country: string;
  country_code: string;
  city?: string;
  region?: string;
}

const FALLBACK_COUNTRY = "your country";

export const getLocationInfo = async (): Promise<{ country: string; countryCode: string }> => {
  try {
    // Use ipapi.co which provides free GeoIP without API key
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch location');
    }
    
    const data: GeoIPResponse = await response.json();
    
    return {
      country: data.country || FALLBACK_COUNTRY,
      countryCode: data.country_code || 'XX'
    };
  } catch (error) {
    console.warn('GeoIP lookup failed, using fallback:', error);
    return {
      country: FALLBACK_COUNTRY,
      countryCode: 'XX'
    };
  }
};

export const getPersonalizedHeadline = (country: string, baseHeadline: string): string => {
  // Only personalize if we have a real country (not fallback)
  if (country === FALLBACK_COUNTRY) {
    return baseHeadline;
  }
  
  // Common personalization patterns
  const personalizations: Record<string, string> = {
    'Nigeria': 'Get Paid in USD or EUR in Nigeria — No Local Bank Hassles',
    'India': 'Get Paid in USD or EUR in India — No Local Bank Hassles',
    'Pakistan': 'Get Paid in USD or EUR in Pakistan — No Local Bank Hassles',
    'Bangladesh': 'Get Paid in USD or EUR in Bangladesh — No Local Bank Hassles',
    'Philippines': 'Get Paid in USD or EUR in Philippines — No Local Bank Hassles',
    'Kenya': 'Get Paid in USD or EUR in Kenya — No Local Bank Hassles',
    'Ghana': 'Get Paid in USD or EUR in Ghana — No Local Bank Hassles',
    'Egypt': 'Get Paid in USD or EUR in Egypt — No Local Bank Hassles',
    'Morocco': 'Get Paid in USD or EUR in Morocco — No Local Bank Hassles',
    'South Africa': 'Get Paid in USD or EUR in South Africa — No Local Bank Hassles',
    'Indonesia': 'Get Paid in USD or EUR in Indonesia — No Local Bank Hassles',
    'Vietnam': 'Get Paid in USD or EUR in Vietnam — No Local Bank Hassles',
    'Thailand': 'Get Paid in USD or EUR in Thailand — No Local Bank Hassles',
    'Malaysia': 'Get Paid in USD or EUR in Malaysia — No Local Bank Hassles',
    'Brazil': 'Get Paid in USD or EUR in Brazil — No Local Bank Hassles',
    'Mexico': 'Get Paid in USD or EUR in Mexico — No Local Bank Hassles',
    'Argentina': 'Get Paid in USD or EUR in Argentina — No Local Bank Hassles',
    'Colombia': 'Get Paid in USD or EUR in Colombia — No Local Bank Hassles',
    'Peru': 'Get Paid in USD or EUR in Peru — No Local Bank Hassles',
    'Ukraine': 'Get Paid in USD or EUR in Ukraine — No Local Bank Hassles',
    'Poland': 'Get Paid in USD or EUR in Poland — No Local Bank Hassles',
    'Romania': 'Get Paid in USD or EUR in Romania — No Local Bank Hassles',
    'Turkey': 'Get Paid in USD or EUR in Turkey — No Local Bank Hassles',
  };
  
  return personalizations[country] || baseHeadline;
};