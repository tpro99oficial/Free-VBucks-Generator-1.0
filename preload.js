function notifyMe () {
  const notification = new window.Notification('Fortnite', {
    body: 'You Sucefully Reedemed 99999999 VBucks'
  })

  notification.onclick = () => console.log('Clicked')
  notification.onclose = () => console.log('Closed')
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').onclick = notifyMe
})
