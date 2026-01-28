// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-metanet-reconstructing-tissue-specific-tf-network-maps",
      
        title: "METANet: Reconstructing Tissue-specific TF Network Maps",
      
      description: "Ensemble learning for inferring GRNs for 36 human tissues",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/metanet-biorxiv/";
        
      },
    },{id: "post-first-publication",
      
        title: "First Publication!",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/first-publication/";
        
      },
    },{id: "post-appointment-to-the-gatp",
      
        title: "Appointment to the GATP",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/appointment-to-the-gatp/";
        
      },
    },{id: "post-lab-affiliation",
      
        title: "Lab Affiliation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/lab-affiliation/";
        
      },
    },{id: "post-rotation-2-completion",
      
        title: "Rotation 2 Completion",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/rotation2-completion/";
        
      },
    },{id: "post-rotation-1-completion",
      
        title: "Rotation 1 Completion",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/rotation1-completion/";
        
      },
    },{id: "post-introduction-to-coding-theory",
      
        title: "Introduction to Coding Theory",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/intro-to-coding-theory/";
        
      },
    },{id: "post-starting-a-weekly-blog",
      
        title: "Starting a weekly blog",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/starting-a-blog/";
        
      },
    },{id: "post-the-face-behind-the-handle",
      
        title: 'The Face Behind the Handle <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Using neural networks to distinguish Donald Trump’s tweeting habits",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/data-science/whos-really-behind-trump-s-tweets-a76b20a7e7", "_blank");
        
      },
    },{id: "post-un-bottling-the-data",
      
        title: 'Un-bottling the data <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Exploring the big data world of wine",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/data-science/un-bottling-the-data-2da3187fb186", "_blank");
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%6F%6F%73%65%6F%6B%6A%75%6E%67@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wsjung", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/woosjung", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=atE49ncAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
