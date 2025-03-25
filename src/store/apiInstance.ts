export const createFetchInstance = (baseURL: string) => {
  const fetchInstance = async (config: {
    url: string;
    method?: string;
    params?: any;
    query?: any;
    body?: any;
    isMultipart?: boolean;
  }) => {
    const { url, method = "GET", params, query, body, isMultipart  } = config;

    
    const queryString = query
      ? "?" + new URLSearchParams(query).toString()
      : "";

      const paramsString = params
      ?'/' + params.toString()
      : "";

    const fullUrl = baseURL + url +  paramsString + queryString;

    
    const token = localStorage.getItem("authToken");

    
    const headers: HeadersInit = {
      Authorization: token ? `Bearer ${token}` : "",
    };

    let requestBody: BodyInit | undefined;

    if (isMultipart && body instanceof FormData) {
      // Do not set 'Content-Type' for FormData, browser handles it
      requestBody = body;
    } else {
      headers["Content-Type"] = "application/json";
      requestBody = body ? JSON.stringify(body) : undefined;
    }

    const options: RequestInit = {
      method,
      headers,
      body: requestBody,
    };

    const response = await fetch(fullUrl, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw { status: response.status, ...errorData };
      // throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  };

  return fetchInstance;
};

// url placeholder
export const apiFetch = createFetchInstance(
  "http://192.168.1.14/api/V1"
  // "http://localhost:5500/api/V1"
);
