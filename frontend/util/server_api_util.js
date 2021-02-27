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

export const deleteServer = serverId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers/${serverId}`
  })
);

export const createServerMembership = (userId, serverId) => (
  $.ajax({
    method: 'POST',
    url: `/api/servers/${serverId}/join/${userId}`,
  })
)

export const deleteServerMembership = (userId, serverId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers/${serverId}/leave/${userId}`,
  })
)

