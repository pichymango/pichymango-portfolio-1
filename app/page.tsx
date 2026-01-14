"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, ExternalLink, Star, GitFork, Mail, MapPin, Building, Calendar, Users, BookOpen } from 'lucide-react'

export default function Portfolio() {
  const user = {
  "login": "pichymango",
  "id": 175595543,
  "node_id": "U_kgDOCndgFw",
  "avatar_url": "https://avatars.githubusercontent.com/u/175595543?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pichymango",
  "html_url": "https://github.com/pichymango",
  "followers_url": "https://api.github.com/users/pichymango/followers",
  "following_url": "https://api.github.com/users/pichymango/following{/other_user}",
  "gists_url": "https://api.github.com/users/pichymango/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pichymango/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pichymango/subscriptions",
  "organizations_url": "https://api.github.com/users/pichymango/orgs",
  "repos_url": "https://api.github.com/users/pichymango/repos",
  "events_url": "https://api.github.com/users/pichymango/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pichymango/received_events",
  "type": "User",
  "user_view_type": "private",
  "site_admin": false,
  "name": "Archit Gupta",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Persuing Electrical and copmputer engineering in Shiv Nadar Institution Of Eminence .Currently focusing on DSA and my major.",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-15T08:06:17Z",
  "updated_at": "2025-12-25T12:16:04Z",
  "private_gists": 0,
  "total_private_repos": 1,
  "owned_private_repos": 1,
  "disk_usage": 18236,
  "collaborators": 0,
  "two_factor_authentication": false,
  "plan": {
    "name": "free",
    "space": 976562499,
    "collaborators": 0,
    "private_repos": 10000
  }
}
  const repos = [
  {
    "id": 1134525796,
    "node_id": "R_kgDOQ599ZA",
    "name": "pichymango-portfolio",
    "full_name": "pichymango/pichymango-portfolio",
    "private": false,
    "owner": {
      "login": "pichymango",
      "id": 175595543,
      "node_id": "U_kgDOCndgFw",
      "avatar_url": "https://avatars.githubusercontent.com/u/175595543?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/pichymango",
      "html_url": "https://github.com/pichymango",
      "followers_url": "https://api.github.com/users/pichymango/followers",
      "following_url": "https://api.github.com/users/pichymango/following{/other_user}",
      "gists_url": "https://api.github.com/users/pichymango/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/pichymango/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/pichymango/subscriptions",
      "organizations_url": "https://api.github.com/users/pichymango/orgs",
      "repos_url": "https://api.github.com/users/pichymango/repos",
      "events_url": "https://api.github.com/users/pichymango/events{/privacy}",
      "received_events_url": "https://api.github.com/users/pichymango/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/pichymango/pichymango-portfolio",
    "description": "Portfolio website for Archit Gupta - Generated with DevForge",
    "fork": false,
    "url": "https://api.github.com/repos/pichymango/pichymango-portfolio",
    "forks_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/forks",
    "keys_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/teams",
    "hooks_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/hooks",
    "issue_events_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/issues/events{/number}",
    "events_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/events",
    "assignees_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/assignees{/user}",
    "branches_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/branches{/branch}",
    "tags_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/tags",
    "blobs_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/languages",
    "stargazers_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/stargazers",
    "contributors_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/contributors",
    "subscribers_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/subscribers",
    "subscription_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/subscription",
    "commits_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/contents/{+path}",
    "compare_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/merges",
    "archive_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/downloads",
    "issues_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/issues{/number}",
    "pulls_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/labels{/name}",
    "releases_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/releases{/id}",
    "deployments_url": "https://api.github.com/repos/pichymango/pichymango-portfolio/deployments",
    "created_at": "2026-01-14T20:53:48Z",
    "updated_at": "2026-01-14T20:54:16Z",
    "pushed_at": "2026-01-14T20:54:03Z",
    "git_url": "git://github.com/pichymango/pichymango-portfolio.git",
    "ssh_url": "git@github.com:pichymango/pichymango-portfolio.git",
    "clone_url": "https://github.com/pichymango/pichymango-portfolio.git",
    "svn_url": "https://github.com/pichymango/pichymango-portfolio",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "# Archit Gupta - Portfolio\n\nThis is a personal portfolio website generated using DevForge Portfolio Generator.\n\n## About\n\nPersuing Electrical and copmputer engineering in Shiv Nadar Institution Of Eminence .Currently focusing on DSA and my major.\n\n## Features\n\n- 🎨 Modern, responsive design\n- 📱 Mobile-friendly interface\n- 🚀 Fast loading with Next.js\n- 🎯 SEO optimized\n- 📊 GitHub integration\n- 🌙 Dark mode support\n\n## Technologies Used\n\n- Next.js 15\n- React 19\n- TypeScript\n- Tailwind CSS\n- Radix UI Components\n\n## Getting Started\n\n### Prerequisites\n\n- Node.js 18 or later\n- npm or yarn\n\n### Installation\n\n1. Clone the repository:\n```bash\ngit clone https://github.com/pichymango/pichymango-portfolio.git\ncd pichymango-portfolio\n```\n\n2. Install dependencies:\n```bash\nnpm install\n# or\nyarn install\n```\n\n3. Run the development server:\n```bash\nnpm run dev\n# or\nyarn dev\n```\n\n4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\n## Deployment\n\nThis portfolio is optimized for static export and can be deployed to any static hosting service:\n\n### Vercel (Recommended)\n\n1. Push your code to GitHub\n2. Connect your repository to Vercel\n3. Deploy automatically\n\n### Other Platforms\n\n1. Build the static files:\n```bash\nnpm run build\n```\n\n2. Deploy the `out` folder to your hosting service\n\n## Customization\n\nYou can customize this portfolio by:\n\n- Editing the content in `app/page.tsx`\n- Modifying styles in `app/globals.css`\n- Adding new components in the `components` folder\n- Updating the configuration in `tailwind.config.ts`\n\n## Contact\n\n- GitHub: [pichymango](https://github.com/pichymango)\n\n\n\n## License\n\nThis project is open source and available under the [MIT License](LICENSE).\n\n---\n\nGenerated with ❤️ using [DevForge Portfolio Generator](https://devforge.dev)\n"
  },
  {
    "id": 1122723587,
    "node_id": "R_kgDOQutnAw",
    "name": "NINA-ai-voice-assistant",
    "full_name": "pichymango/NINA-ai-voice-assistant",
    "private": false,
    "owner": {
      "login": "pichymango",
      "id": 175595543,
      "node_id": "U_kgDOCndgFw",
      "avatar_url": "https://avatars.githubusercontent.com/u/175595543?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/pichymango",
      "html_url": "https://github.com/pichymango",
      "followers_url": "https://api.github.com/users/pichymango/followers",
      "following_url": "https://api.github.com/users/pichymango/following{/other_user}",
      "gists_url": "https://api.github.com/users/pichymango/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/pichymango/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/pichymango/subscriptions",
      "organizations_url": "https://api.github.com/users/pichymango/orgs",
      "repos_url": "https://api.github.com/users/pichymango/repos",
      "events_url": "https://api.github.com/users/pichymango/events{/privacy}",
      "received_events_url": "https://api.github.com/users/pichymango/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/pichymango/NINA-ai-voice-assistant",
    "description": "An AI-powered voice assistant that executes system-level tasks via voice commands using Python, Gemini API, and a WebSocket-based frontend.",
    "fork": false,
    "url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant",
    "forks_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/forks",
    "keys_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/teams",
    "hooks_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/hooks",
    "issue_events_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/issues/events{/number}",
    "events_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/events",
    "assignees_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/assignees{/user}",
    "branches_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/branches{/branch}",
    "tags_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/tags",
    "blobs_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/languages",
    "stargazers_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/stargazers",
    "contributors_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/contributors",
    "subscribers_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/subscribers",
    "subscription_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/subscription",
    "commits_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/contents/{+path}",
    "compare_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/merges",
    "archive_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/downloads",
    "issues_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/issues{/number}",
    "pulls_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/labels{/name}",
    "releases_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/releases{/id}",
    "deployments_url": "https://api.github.com/repos/pichymango/NINA-ai-voice-assistant/deployments",
    "created_at": "2025-12-25T11:14:23Z",
    "updated_at": "2025-12-25T14:43:29Z",
    "pushed_at": "2025-12-25T14:43:26Z",
    "git_url": "git://github.com/pichymango/NINA-ai-voice-assistant.git",
    "ssh_url": "git@github.com:pichymango/NINA-ai-voice-assistant.git",
    "clone_url": "https://github.com/pichymango/NINA-ai-voice-assistant.git",
    "svn_url": "https://github.com/pichymango/NINA-ai-voice-assistant",
    "homepage": "",
    "size": 44,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [
      "ai-projects",
      "artificial-intelligence",
      "automation",
      "gemini-api",
      "python",
      "student-project",
      "system-automation",
      "voice-assistant",
      "voice-commands",
      "voice-recognition",
      "websockets"
    ],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "NINA – AI-Controlled Voice Assistant\nNINA is an AI-powered voice assistant that enables system-level task execution on a laptop using voice commands.\nThe assistant processes spoken input, understands intent using AI, and performs real-time automation tasks.\n\n\nFeatures\nVoice-controlled system automation\nEmail composition and reminder setup\nBrowser search and location-based queries\nWeather and traffic information\nScreenshot capture\nMedia control (YouTube playback)\nQuestion solving and code generation\nModular command execution architecture\n\n\nTech Stack\nPython – core backend and automation logic\nGemini API – intent understanding and AI responses\nSpeechRecognition – voice input processing\nWebSockets – real-time communication between backend and GUI\nJavaScript & CSS – frontend GUI\n\nHow It Works\nVoice input is captured using the microphone\nSpeech is converted to text\nIntent is identified using Gemini API\nCommands are routed to relevant automation modules\nActions are executed on the system in real time\n"
  },
  {
    "id": 909123009,
    "node_id": "R_kgDONjAdwQ",
    "name": "Hackathon",
    "full_name": "pichymango/Hackathon",
    "private": false,
    "owner": {
      "login": "pichymango",
      "id": 175595543,
      "node_id": "U_kgDOCndgFw",
      "avatar_url": "https://avatars.githubusercontent.com/u/175595543?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/pichymango",
      "html_url": "https://github.com/pichymango",
      "followers_url": "https://api.github.com/users/pichymango/followers",
      "following_url": "https://api.github.com/users/pichymango/following{/other_user}",
      "gists_url": "https://api.github.com/users/pichymango/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/pichymango/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/pichymango/subscriptions",
      "organizations_url": "https://api.github.com/users/pichymango/orgs",
      "repos_url": "https://api.github.com/users/pichymango/repos",
      "events_url": "https://api.github.com/users/pichymango/events{/privacy}",
      "received_events_url": "https://api.github.com/users/pichymango/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/pichymango/Hackathon",
    "description": "We made a women safety app. It has live location and SOS sending features. Read about it in readme file. A video of app's working is also uploaded",
    "fork": false,
    "url": "https://api.github.com/repos/pichymango/Hackathon",
    "forks_url": "https://api.github.com/repos/pichymango/Hackathon/forks",
    "keys_url": "https://api.github.com/repos/pichymango/Hackathon/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/pichymango/Hackathon/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/pichymango/Hackathon/teams",
    "hooks_url": "https://api.github.com/repos/pichymango/Hackathon/hooks",
    "issue_events_url": "https://api.github.com/repos/pichymango/Hackathon/issues/events{/number}",
    "events_url": "https://api.github.com/repos/pichymango/Hackathon/events",
    "assignees_url": "https://api.github.com/repos/pichymango/Hackathon/assignees{/user}",
    "branches_url": "https://api.github.com/repos/pichymango/Hackathon/branches{/branch}",
    "tags_url": "https://api.github.com/repos/pichymango/Hackathon/tags",
    "blobs_url": "https://api.github.com/repos/pichymango/Hackathon/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/pichymango/Hackathon/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/pichymango/Hackathon/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/pichymango/Hackathon/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/pichymango/Hackathon/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/pichymango/Hackathon/languages",
    "stargazers_url": "https://api.github.com/repos/pichymango/Hackathon/stargazers",
    "contributors_url": "https://api.github.com/repos/pichymango/Hackathon/contributors",
    "subscribers_url": "https://api.github.com/repos/pichymango/Hackathon/subscribers",
    "subscription_url": "https://api.github.com/repos/pichymango/Hackathon/subscription",
    "commits_url": "https://api.github.com/repos/pichymango/Hackathon/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/pichymango/Hackathon/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/pichymango/Hackathon/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/pichymango/Hackathon/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/pichymango/Hackathon/contents/{+path}",
    "compare_url": "https://api.github.com/repos/pichymango/Hackathon/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/pichymango/Hackathon/merges",
    "archive_url": "https://api.github.com/repos/pichymango/Hackathon/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/pichymango/Hackathon/downloads",
    "issues_url": "https://api.github.com/repos/pichymango/Hackathon/issues{/number}",
    "pulls_url": "https://api.github.com/repos/pichymango/Hackathon/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/pichymango/Hackathon/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/pichymango/Hackathon/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/pichymango/Hackathon/labels{/name}",
    "releases_url": "https://api.github.com/repos/pichymango/Hackathon/releases{/id}",
    "deployments_url": "https://api.github.com/repos/pichymango/Hackathon/deployments",
    "created_at": "2024-12-27T19:40:38Z",
    "updated_at": "2024-12-27T19:47:49Z",
    "pushed_at": "2024-12-27T19:47:46Z",
    "git_url": "git://github.com/pichymango/Hackathon.git",
    "ssh_url": "git@github.com:pichymango/Hackathon.git",
    "clone_url": "https://github.com/pichymango/Hackathon.git",
    "svn_url": "https://github.com/pichymango/Hackathon",
    "homepage": null,
    "size": 17136,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "HTML",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "# जननी (Janani) - Women's Safety Web App\n\nजननी (Janani) is a web application designed to enhance women's safety by providing critical features such as live location tracking, SOS alerts, and emergency contacts. This app is aimed at helping individuals in distress by offering quick access to safety measures, including siren alerts, nearby devices detection, and identifying the safest route to safety.\n\n## Features\n\n### 1. Login/Signup Page\n- Allows users to create an account or log in using a simple form.\n- User credentials are stored in the browser's LocalStorage.\n- On successful login, users are redirected to the home page.\n\n### 2. Home Page\nThe home page serves as the central hub for safety features, offering:\n\n- *Live Location Map*: Displays the user's current location on an interactive map.\n- *Emergency Contacts*: A button to quickly access emergency contacts and call them.\n- *Live Location Sharing*: Share your live location with designated contacts.\n- *SOS Button*: Instantly sends an SOS alert with your current location to your emergency contacts.\n- *Nearby Devices*: Detect nearby devices for potential help or support.\n- *Siren Activation*: Activates a loud siren to attract attention during emergencies.\n- *Safest Route*: Suggests the safest route to reach your destination.\n- *Hamburger Menu*: Provides access to a logout button for secure session termination.\n\n### 3. Logout Functionality\n- The hamburger menu includes a \"Log Out\" button to allow users to securely log out of the app.\n\n## Technologies Used\n- *HTML5, CSS3, JavaScript*: Core web technologies for the app interface and functionality.\n- *LocalStorage*: Stores user login/signup data locally for easy access.\n- *Map API*: Displays the live location of the user on a map.\n\n\n## Future Enhancements\n\n- *Real-time Database Integration*: Replace LocalStorage with a more secure and scalable backend database.\n- *Push Notifications*: Implement notifications to alert users or contacts in real-time during emergencies.\n- *Improved Security*: Implement features like OTP verification for added security during user login/signup.\n\n## License\n\nThis project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.\n"
  }
]
  const skills = [
  "TypeScript",
  "Python",
  "HTML",
  "python"
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-white shadow-lg">
              <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={user.name || user.login} />
              <AvatarFallback className="text-2xl">{(user.name || user.login).charAt(0)}</AvatarFallback>
            </Avatar>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {user.name || user.login}
            </h1>

            {user.bio && (
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                {user.bio}
              </p>
            )}

            <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm text-gray-600 dark:text-gray-400">
              {user.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
              )}
              {user.company && (
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {user.company}
                </div>
              )}
              {user.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Joined {new Date(user.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
                onClick={() => window.open(user.html_url, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
              {user.blog && (
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(user.blog, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Website
                </Button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.public_repos}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Repositories
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.followers}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  Followers
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.following}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  Following
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <Card 
                key={repo.id} 
                className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {repo.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      {repo.homepage && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-gray-600 p-1"
                          onClick={() => window.open(repo.homepage, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600 p-1"
                        onClick={() => window.open(repo.html_url, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks_count}
                    </div>
                    {repo.language && (
                      <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                        {repo.language}
                      </Badge>
                    )}
                  </div>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="text-xs bg-gray-50 border-gray-200 text-gray-600"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            Built with ❤️ using DevForge Portfolio Generator
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  )
}