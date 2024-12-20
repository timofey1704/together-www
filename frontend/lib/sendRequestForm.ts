import { FormData } from '@/app/types'

export const sendRequestForm = async (formData: FormData) => {
  const API_URL = 'http://127.0.0.1:8000/api/v1'
  const API_KEY = 'fghasjd-123-asdjk'

  try {
    const response = await fetch(`${API_URL}/send-request/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `ApiKey ${API_KEY}`,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        request_type: 'landing',
        name: formData.name,
        request: formData.request,
        surname: '-',
        email: formData.email,
        phone_number: '-',
      }),
    })

    if (!response.ok) {
      let errorMessage = `Failed to send form data: ${response.status} ${response.statusText}`
      try {
        const errorData = await response.text()
        if (errorData) {
          errorMessage += ` - ${errorData}`
        }
      } catch (e) {
        console.error('Error parsing error response:', e)
      }
      throw new Error(errorMessage)
    }

    const text = await response.text()
    return text ? JSON.parse(text) : null
  } catch (error) {
    console.error('Error sending form data:', error)
    throw error
  }
}
