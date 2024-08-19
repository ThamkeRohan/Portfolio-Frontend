export const projects = [
  {
    name: "CodeSphere",
    image: "code-sphere.jpg",
    features: (
      <ul className="features">
        <li>
          <p>
            A platform enabling developers to{" "}
            <span className="highlight">write</span>, {" "}
            <span className="highlight">share</span> and{" "}
            <span className="highlight">discover technical articles</span> on
            various software development topics.
          </p>
        </li>
        <li>
          <p>
            <span className="highlight">Infinite scroll</span> for loading more
            posts at the bottom of a page.
          </p>
        </li>
        <li>
          <p>
            <span className="highlight">Nested commenting system</span> for
            threaded discussions.
          </p>
        </li>
        <li>
          <p>
            <span className="highlight">Bookmarking</span> and{" "}
            <span className="highlight">liking features</span> for content
            curation.
          </p>
        </li>
        <li>
          <p>
            <span className="highlight">User authentication</span> via{" "}
            <span className="highlight"> Google OAuth</span> and{" "}
            <span className="highlight">email/password</span> using{" "}
            <span className="highlight">Passport.js</span>.
          </p>
        </li>
        <li>
          <p>
            Secure and persistent sessions using{" "}
            <span className="highlight">express-session</span>.
          </p>
        </li>
        <li>
          <p>
            Robust <span className="highlight">notification system</span> with{" "}
            <span className="highlight">MongoDB Change Streams</span> and{" "}
            <span className="highlight">Server-Sent Events</span>.
          </p>
        </li>
        <li>
          <p>
            <span className="highlight">Custom multi-select input</span> for tag
            selection and creation, featuring{" "}
            <span className="highlight">debounced input</span> for efficient
            network requests.
          </p>
        </li>
      </ul>
    ),
    github: "https://github.com/ThamkeRohan/BlogHub-Frontend",
    domain: "https://rohan-thamke-bloghub.netlify.app/",
  },
  {
    name: "VirtualScoreboard",
    image: "virtual-scoreboard.jpg",
    features: (
      <ul className="features">
        <li>
          <p>
            <span className="highlight">
              A cricket score tracking web application
            </span> for umpires and spectators.
          </p>
        </li>
        <li>
          <p>
            Allows umpires to{" "}
            <span className="highlight">create accounts</span>, {" "}
            <span className="highlight">initiate new matches</span> and{" "}
            <span className="highlight">update live scores</span>.
          </p>
        </li>
        <li>
          <p>
            These updates are broadcasted to spectators in{" "}
            <span className="highlight">real-time using Socket.io</span>,
            providing an upto-date scoreboard that mirrors the live match.
          </p>
        </li>
        <li>
          <p>
            <span className="highlight">Role-based access</span>, ensuring that
            only authorized users can update scores while spectators can view
            the live feed.
          </p>
        </li>
        <li>
          <p>
            <span className="highlight">JWT authentication</span> for secure
            user sessions.
          </p>
        </li>
        <li>
          <p>
            Support for{" "}
            <span className="highlight">multiple simultaneous matches</span>.
          </p>
        </li>
        <li>
          <p>
            <span className="highlight">Match filtering</span> based on{" "}
            <span className="highlight">match status</span>,{" "}
            <span className="highlight">from date</span> and{" "}
            <span className="highlight">to date</span>.
          </p>
        </li>
      </ul>
    ),
    github: "https://github.com/ThamkeRohan/BlogHub-Frontend",
    domain: "https://rohan-thamke-bloghub.netlify.app/",
  },
];
