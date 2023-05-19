import getFollowers from "./api/twitter/followers"

/*
function TwitterCard(props : any) {
  let profileImageURL = props.twitterInfo.profileImageURL.replace(/_normal/g, "");

  return (
    <div>
      <div>
        <img src={props.twitterInfo.profileBannerURL} />
        <div>
          <img src={profileImageURL} />
        </div>
      </div>
      <div>
        <p>{props.twitterInfo.name}</p>
        <p>@{props.twitterInfo.screenName}</p>
        <p>{props.twitterInfo.description}</p>
      </div>
    </div>
  )
}
*/

export default function Twinfo() {
  console.log("stepbeg")
  try {
    const userResponse = getFollowers();
  } catch (error) {
    console.log("error")
  }
  console.log("stepend")

  return (
    <div>
      <h2>Twitter Card</h2>
    </div>
  )
}

/*
export async function getServerSideProps(context : any) {
  let twitterHandle = "YToimich"
  let twitterInfo = null

  const userResponse = await fetchUser(twitterHandle)
  twitterInfo = {
    'screenName': "screen_name",
    'name': "name",
    'description': "description",
    'profileImageURL': "profile_image_url_https",
    'profileBannerURL': "profile_banner_url"
  }

  return {
    props: {
      "twitterInfo": twitterInfo
    },
  }
}
*/
