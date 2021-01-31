export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const checkEmail = email => (
  $.ajax({
    url: '/api/session/check_email',
    data: { email }
  })
);