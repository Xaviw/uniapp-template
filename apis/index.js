export const login = data => uni.$u.http.post('', data)

export const logout = data => uni.$u.http.post('', data)

export const checkUpgrade = params => uni.$u.http.get('', { params })

export const fetchSocketServer = params => uni.$u.http.get('', { params })

export const fetchPaymentStatus = data => uni.$u.http.post('', data)
