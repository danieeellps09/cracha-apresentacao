const LinksSocialMedia = {
    github: 'danieeellps09', 
    youtube: 'Daniel Lopes',
    facebook:'daniellopes.dasilva.503',
    instagram:'daniel.lopes09',
    twitter: 'Lopezs09',
}

// function changeSocialMediaLinks () {

//   for(let li of socialLinks.children)
//   const social = li.getAtributte ('class')
//   li.children[0].href= `https:${social}.com/${socialLinks[social]}` 


// }

// changeSocialMediaLinks ()


function getGitHubProfileInfos() {

const url = `https://api.github.com/users/${LinksSocialMedia.github}`
fetch(url)
.then (response => response.json())
.then(data => {
userBio.textContent = data.bio
userImage.src = data.avatar_url
userLink.href = data.html_url
userLogin.textContent = data.login
})
}

getGitHubProfileInfos()