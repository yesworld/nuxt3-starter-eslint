export interface IFormLogin {
  name: string
  email: string
  password: string
}

export interface IFormRegistration extends IFormLogin {
  confirmPassword: string
}
