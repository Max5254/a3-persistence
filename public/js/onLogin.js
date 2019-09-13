const submit = function( e ) {
    // prevent default form action from being carried out
    e.preventDefault()

    let getTime = function(){
    let utctime = String(Date.now());
    try {
      utctime = document.querySelector( '#inputTime' ).value;
    } catch {}
    return utctime;
  }

    const username = document.querySelector( '#inputUsername' ),
          password = document.querySelector( '#inputPassword' ),
          json = { username: username.value, 
                   password: password.value,
                  },
          body = JSON.stringify( json )

    if(username.value === '' || password.value === ''){
      console.log('missing input')
      document.querySelector( '#blankInputBox' ).removeAttribute('hidden');
      return false;
    }

    console.log(body)
    fetch( '/login', {
        method:'POST',
        body: body,//JSON.stringify({ username:'charlie', password:'charliee' }),
        headers: { 'Content-Type': 'application/json' }
      }).then(function(response) {
          if(response.status == 401){
              console.log('unauthorized');
              document.querySelector( '#invalidLoginBox' ).removeAttribute('hidden');
          } else {
            console.log(response);
            let json = response.json();
          }
      })
    //   .then(res => {
    //     if(res){
    //         console.log('missing input')
    //         document.querySelector( '#blankInputBox' ).removeAttribute('hidden');
    //         return false;
    //       }
    //   })

    // window.location = '/'

    return false
  }

  window.onload = function() {
    const button = document.querySelector( '#login' )
    button.onclick = submit
  }