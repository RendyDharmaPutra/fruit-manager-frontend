type AiResponse = {
  total_harga: number;
};

export const fetchAi = async <T>(data?: T): Promise<AiResponse> => {
  try {
    const response = await fetch(`http://ai_core:5000/price`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data && JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("ERROR saat action:", err);
    return {
      total_harga: 0,
    };
  }
};
