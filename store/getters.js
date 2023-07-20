const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  phone: state => state.user.phone,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
}
export default getters
