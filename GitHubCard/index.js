/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let entry = document.querySelector('.cards')
axios.get('https://api.github.com/users/kkslider2130').then(res => entry.append(makeCard(res.data)));

//original code//
const followersArray = ['leachcoding', 'KateAnn19', 'josiahroa18', 'brudnak']
/*followersArray.forEach(a => axios.get(`https://api.github.com/users/${a}`).then(res => entry.append(makeCard(res.data))));
 */

//stretch code attempt #1//

/* let makeFollowerCards = (userName) => {
  let followerList = `https://api.github.com/users/${userName}/followers`
  axios.get(followerList).then(res => {
    [...res.data].forEach(a => entry.append(makeCard(a)))
    console.log([...res.data])
  })

}

makeFollowerCards('kkslider2130') */

//stretch code success!//

let makeFollowerCards = (userName) => {
  let followerList = `https://api.github.com/users/${userName}/followers`
  axios.get(followerList).then(res => {
    console.log(res.data)
    return res.data.map(a => {
      return a.login;
    })

  }).then(res => res.forEach(a => axios.get(`https://api.github.com/users/${a}`).then(res => entry.append(makeCard(res.data)))))

}

makeFollowerCards('kkslider2130')


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
let makeCard = (obj) => {
  let cardDiv = document.createElement('div');
  let userImage = document.createElement('img');
  let cardInfo = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');
  cardDiv.classList.add('card');
  userImage.src = obj.avatar_url
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  name.innerHTML = obj.name;
  userName.classList.add('username');
  userName.innerHTML = obj.login;
  location.innerHTML = obj.location;
  profile.innerHTML = `profile: <a href=${obj.html_url}>${obj.html_url}</a>`;
  followers.innerHTML = `followers: ${obj.followers}`;
  following.innerHTML = `following: ${obj.following}`;
  bio.innerHTML = `bio: ${obj.bio}`;
  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(profile);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);
  cardDiv.append(userImage);
  cardDiv.append(cardInfo);

  return cardDiv;





}