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


export const createServer = serverFormData => (
  $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: serverFormData,
    contentType: false,
    processData: false
  })
);

