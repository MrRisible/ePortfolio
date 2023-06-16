export default function Profile() {
  return (
    <div id="profile" className="profile">
      <div className="profile-page">
        <div className="profile-content">
          <div className="profile-info">
            <div className="profile-info-card">
              <h1 className="profile-info-label">Address</h1>
              <p className="profile-info-content">
                Purok Diwata, Barangay Tapi, Kabankalan City, Negros Occidental,
                6111
              </p>
            </div>
            <div className="profile-info-card">
              <h1 className="profile-info-label">Email</h1>
              <p className="profile-info-content">
                raymond.managuit@outlook.com
              </p>
            </div>
            <div className="profile-info-card">
              <h1 className="profile-info-label">Tertiary Education</h1>
              <p className="profile-info-content">STI West Negros University</p>
            </div>
          </div>
          <div className="profile-experience">
            <h1>Work Experience</h1>
            <div className="profile-projects">
              <p>Project: Pasabay</p>
              <p className="define">Pasabay is a cloud kitchen where you can sell your homemade foods. You are just like having a virtual restaurant.</p>
              <div className="profile-images">
              <img className="s0s" src="/images/pasabay4.png" alt="0" />
                <img className="s1s" src="/images/pasabay.png" alt="0" />
                <img className="s2s"src="/images/pasabay1.png" alt="1" />
                <img className="s3s"src="/images/pasabay2.png" alt="2" />
                <img className="s4s"src="/images/pasabay3.png" alt="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
