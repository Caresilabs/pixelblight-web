import { siteInfo } from "../config";

export default function AndroidProvacy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        {/* Local organic blight clouds */}
        <div className="absolute top-10 left-1/4 w-64 h-32 bg-purple-600/30 rounded-full blur-2xl transform rotate-12"></div>
        <div className="absolute top-20 right-1/3 w-48 h-24 bg-yellow-500/20 rounded-full blur-xl transform -rotate-6"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-40 bg-orange-500/15 rounded-full blur-3xl transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-64 bg-purple-500/35 rounded-full blur-2xl transform -rotate-12"></div>

        {/* Local pixelated corruption */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-16 left-16 w-4 h-4 bg-yellow-400/70 blur-sm animate-pulse"></div>
          <div className="absolute top-24 left-32 w-2 h-2 bg-purple-500/90"></div>
          <div className="absolute top-32 left-24 w-3 h-3 bg-orange-400/80 blur-sm"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/70 animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-4 h-4 bg-yellow-500/60 blur-sm"></div>
          <div className="absolute bottom-24 left-1/3 w-3 h-3 bg-purple-600/80"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 bg-clip-text text-transparent filter drop-shadow-2xl">
            {siteInfo.company} / Caresi Labs
          </h1>
        </div>
      </section>

      <section>
        <div id="content" className="m-6 text-white">
          <header className="entry-header">
            <h1 className="font-semibold text-xl">
              Android Games Privacy Policy
            </h1>
          </header>

          <div className="container">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article id="post-306" className="">
                  <div className="">
                    <h3>
                      Caresi Labs – A Privacy Policy for our Android Games
                    </h3>
                    <p>&nbsp;</p>
                    <h3 className="font-semibold text-xl my-2">Introduction</h3>
                    <p>
                      This Privacy Policy applies for all of our Android games,
                      unless specified.
                    </p>
                    <h3 className="font-semibold text-xl my-2">Analytics</h3>
                    <p>
                      Analytics companies may access anonymous data (such as
                      your IP address or device ID) to help us understand how
                      our services are used. They use this data solely on our
                      behalf. They do not share it except in aggregate form; no
                      data is shared as to any individual user.
                    </p>
                    <h3 className="font-semibold text-xl my-2">Ad Tracking</h3>
                    <p>
                      Ad companies may use and collect anonymous data about your
                      interests to customize content and advertising here and in
                      other sites and applications. Interest and location data
                      may be linked to your device, but is not linked to your
                      identity. Click to see company privacy policies and
                      opt-out choices:
                    </p>
                    <ul>
                      <li>
                        https://answers.chartboost.com/hc/en-us/articles/200780269-Privacy-Policy
                      </li>
                      <li>https://www.google.com/policies/privacy/</li>
                    </ul>
                    <h3 className="font-semibold text-xl my-2">
                      Information Sharing
                    </h3>
                    <p>
                      We generally do not share personally identifiable
                      information (such as name, address, email or phone) with
                      other companies unless approved by you.
                    </p>
                    <h3 className="font-semibold text-xl my-2">More</h3>
                    <p>
                      Our privacy policy may change from time to time. When we
                      do, we will revise the “updated” date at the bottom of the
                      privacy statement. We will obtain your opt-in consent for
                      any updates to this Privacy Policy that materially expand
                      the sharing or use of your personal information in ways
                      not disclosed in this Privacy Policy at the time of
                      collection.
                    </p>
                    <h3 className="font-semibold text-xl my-2">Contact</h3>
                    <p>
                      If you have any questions or concerns about this privacy
                      policy you can contact us on:
                    </p>
                    <p>Email: caresilabs@gmail.com</p>
                    <p>&nbsp;</p>
                    <p>Updated: 09-02-2017</p>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
