export const fetchSocketServer = params => uni.$u.http.get('', { params })

export const login = data => uni.$u.http.post('', data)

export const fetchPaymentStatus = data => uni.$u.http.post('', data)
