export const fetchServers = () => (
  $.ajax({
    url: '/api/servers'
  })
);

export const fetchServer = serverId => (
  $.ajax({
    url: `/api/servers/${serverId}`
  })
);


export const createServer = server => (
  $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: { server }
  })
);

