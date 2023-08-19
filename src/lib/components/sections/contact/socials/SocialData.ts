export type SocialInfo = {
  name: string;
  icon: string;
  href: string;
  custom?: string;
  background: string;
}

export const SocialData: Record<string, SocialInfo[]> = {
  "Social": [
    {
      name: "Linkedin",
      icon: "bi:linkedin",
      href: "https://www.linkedin.com/in/blakeinstein/",
      background: "#0085AE"
    },
    {
      name: "Twitter",
      icon: "bi:twitter",
      href: "https://twitter.com/BlaineSensei",
      background: "#32CCFE"
    },
    {
      name: "Reddit",
      icon: "bi:reddit",
      href: "https://reddit.com/u/sigiz",
      background: "#F74300"
    },
    {
      name: "Instagram",
      icon: "bi:instagram",
      href: "https://www.instagram.com/blainesensei/",
      background: `radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );`
    }
  ],
  "Productivity": [
    {
      name: "Github",
      icon: "bi:github",
      href: "https://github.com/Blakeinstein",
      background: "#070709"
    },
    {
      name: "StackOverFlow",
      icon: "cib:stackoverflow",
      href: "https://stackoverflow.com/users/7799568/blaine",
      background: "#FF7300"
    },
    {
      name: "Polywork",
      custom: "polywork",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-1/2 w-1/2" viewBox="0 0 37 37" fill="none">
      <path d="M12.7188 36.0635V25.0098H24.2812V29.5307C24.2782 31.2644 23.5873 32.926 22.3604 34.1508C21.1334 35.3756 19.4705 36.0635 17.7369 36.0635H12.7188Z" fill="#88CFB0"></path>
      <path d="M17.7138 37.0001H11.8169V24.0732H25.1831V29.5307C25.1801 31.5108 24.3922 33.4089 22.992 34.809C21.5919 36.2091 19.6938 36.9971 17.7138 37.0001V37.0001ZM13.6785 35.127H17.7138C19.1991 35.127 20.6237 34.5378 21.675 33.4886C22.7263 32.4394 23.3185 31.016 23.3216 29.5307V25.9464H13.6785V35.127Z" fill="#2F2F3A"></path>
      <path d="M24.5587 24.698V12.9736H36.1212V18.1536C36.1227 19.0125 35.9549 19.8632 35.6273 20.6572C35.2996 21.4511 34.8187 22.1726 34.2119 22.7805C33.6051 23.3884 32.8844 23.8706 32.0911 24.1996C31.2977 24.5286 30.4473 24.698 29.5884 24.698H24.5587Z" fill="#F2C94C"></path>
      <path d="M29.5306 25.6346H23.6222V12.0371H37V18.1537C37 20.1357 36.2134 22.0368 34.813 23.4394C33.4125 24.842 31.5127 25.6315 29.5306 25.6346V25.6346ZM25.4953 23.7615H29.5306C31.0159 23.7584 32.4393 23.1662 33.4885 22.1149C34.5376 21.0636 35.1269 19.639 35.1269 18.1537V13.8755H25.4953V23.7615Z" fill="#2F2F3A"></path>
      <path d="M24.2465 12.9736H12.7418V24.698H24.2465V12.9736Z" fill="#BD83CE"></path>
      <path d="M25.1831 25.6346H11.8169V12.0371H25.1831V25.6346ZM13.6206 23.7615H23.2638V13.8755H13.6785L13.6206 23.7615Z" fill="#2F2F3A"></path>
      <path d="M0.936523 12.7187V7.46934C0.936523 5.73673 1.6248 4.07508 2.84994 2.84994C4.07508 1.6248 5.73673 0.936523 7.46934 0.936523H12.4412V12.7187H0.936523Z" fill="#40BE88"></path>
      <path d="M13.3778 13.5975H0V7.46938C0.00305802 5.48931 0.79099 3.59122 2.19111 2.19111C3.59122 0.79099 5.48931 0.00305802 7.46938 0L13.3778 0V13.5975ZM1.87313 11.7244H11.5625V1.87313H7.46938C5.98516 1.87313 4.56173 2.46273 3.51223 3.51223C2.46273 4.56173 1.87313 5.98516 1.87313 7.46938V11.7244Z" fill="#2F2F3A"></path>
      <path d="M24.5587 12.7187V0.936523H29.5306C31.2632 0.936523 32.9248 1.6248 34.15 2.84994C35.3751 4.07508 36.0634 5.73673 36.0634 7.46934V12.7187H24.5587Z" fill="#FF7474"></path>
      <path d="M37 13.5975H23.6222V0H29.5306C31.5107 0.00305802 33.4088 0.79099 34.8089 2.19111C36.209 3.59122 36.9969 5.48931 37 7.46938V13.5975ZM25.4953 11.7244H35.1269V7.46938C35.1269 5.98516 34.5373 4.56173 33.4878 3.51223C32.4383 2.46273 31.0148 1.87313 29.5306 1.87313H25.4953V11.7244Z" fill="#2F2F3A"></path>
      <path d="M24.2465 0.936523H12.7418V12.6609H24.2465V0.936523Z" fill="#6776F9"></path>
      <path d="M25.1831 13.5975H11.8169V0H25.1831V13.5975ZM13.6206 11.7244H23.2638V1.87313H13.6785L13.6206 11.7244Z" fill="#2F2F3A"></path>
      <path d="M0.936523 29.5307V25.0098H12.499V36.0635H7.46934C5.73673 36.0635 4.07508 35.3752 2.84994 34.1501C1.6248 32.925 0.936523 31.2633 0.936523 29.5307V29.5307Z" fill="#37C2E2"></path>
      <path d="M13.3778 37.0001H7.46938C5.48931 36.9971 3.59122 36.2091 2.19111 34.809C0.79099 33.4089 0.00305802 31.5108 0 29.5307L0 24.0732H13.3778V37.0001ZM1.87313 25.9464V29.5307C1.87313 31.015 2.46273 32.4384 3.51223 33.4879C4.56173 34.5374 5.98516 35.127 7.46938 35.127H11.5625V25.9464H1.87313Z" fill="#2F2F3A"></path>
      <path d="M12.4412 12.9736H0.936523V24.698H12.4412V12.9736Z" fill="#F2994A"></path>
      <path d="M13.3778 25.6346H0V12.0371H13.3778V25.6346ZM1.87313 23.7615H11.5625V13.8755H1.87313V23.7615Z" fill="#2F2F3A"></path>
      <defs>
      </defs>
      </svg>`,
      href: "https://polywork.blaine.vip",
      background: "#222C"
    }
  ],
  "Gaming": [
    {
      name: "Steam",
      icon: "bi:steam",
      href: "https://steamcommunity.com/id/BlaineSensei/",
      background: "linear-gradient(120deg, #00adee, #000000)"
    },
    {
      name: "Discord Tag : Blaine#6960",
      icon: "bi:discord",
      href: "https://discord.com/",
      background: "#8697f6"
    },
    {
      name: "Battle.net Tag : Blaine#22648",
      icon: "simple-icons:battledotnet",
      href: "https://www.blizzard.com/en-us/",
      background: "#2e60b4"
    }
  ],
  "Other": [
    {
      name: "MyAnimeList",
      icon: "simple-icons:myanimelist",
      href: "https://myanimelist.net/profile/Blakeinstein",
      background: "#2c54a4"
    },
    {
      name: "Soundcloud",
      icon: "cib:soundcloud",
      href: "https://soundcloud.com/blakeinstein",
      background: "#f75219"
    },
    {
      name: "Spotify",
      icon: "bi:spotify",
      href: "https://open.spotify.com/user/c3fph9vexjdfvvdmh7h9kjdqv",
      background: "#1ed760"
    }
  ]
}