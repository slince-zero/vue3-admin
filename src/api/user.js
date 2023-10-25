import service from '../utlis/request'

// 登录
export const login = async (data) => {
  try {
    const response = await service({
      url: '/api/login',
      method: 'post',
      data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

// 退出登录
export const logout = () => {
  return service({
    url: '/api/logout',
    method: 'post',
  }) 
}
