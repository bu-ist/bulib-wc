import{h as i,i as a,_ as e,e as r,f as s,g as l,j as n,k as t,l as u}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";import"./index-bbd66e60.js";function b(){return(b=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i}).apply(this,arguments)}const c={},o="wrapper";function d(i){let{components:e}=i,s=l(i,["components"]);return r(o,b({},c,s,{components:e,mdxType:"MDXLayout"}),r(n,{title:"Branding|header",mdxType:"Meta"}),r("h1",null,"BU Libraries Header"),r("p",null,"Provide a clean, consistent, minimalist, and reliable way to brand any given site and to navigate between subsites\nwhether on large screens or on mobile, even when ",r("inlineCode",{parentName:"p"},"javascript")," is turned off."),r("p",null,r("em",{parentName:"p"},"NOTE: the css for this requires a build step")),r("h2",null,"Top Bar"),r("p",null,"Contains the main navigation across/between all sites.  "),r("h3",null,"Basic"),r("p",null,"The basic bar includes a dropdown, but isn't a megamenu. "),r(t,{mdxType:"Preview"},r(u,{name:"header",mdxType:"Story"},a`
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  
                <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  
                <li id="subsite-about"><a href="https://www.bu.edu/library/about">About Us</a></li>
                <li>  
                  <div class="dropdown">  
                      <a class="menu-item inline" href="https://www.bu.edu/library/about">  
                        <span class="prs">Locations</span><i class="material-icons inline">arrow_drop_down</i>  
                      </a>  
                    <div class="dropdown-content">  
                        <ul class="library-list no-bullet"> 
                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    
                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  
                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  
                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li>  
                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> 
                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  
                          <li><a href="https://www.bu.edu/library/sel/">Science & Engineering Library</a></li>  
                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  
                          <li><a href="https://www.bu.edu/library/about/additional-libraries/">Additional Libraries</a></li>  
                        </ul> 
                    </div>  
                  </div>  
                </li> 
              </ul> 
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>
                    
                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  
                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>
                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  
                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> 
                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>
                    <li><hr></li>
                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  
                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
      <br /><br /><br /><br /><br />
    `)),r("h2",null,"Advanced"),r("p",null,"The advanced header contains a ",r("inlineCode",{parentName:"p"},"div.submenu")," that appears on mouseover."),r(t,{mdxType:"Preview"},r(u,{name:"header-advanced",mdxType:"Story"},a`
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li class="menu-item">
                  <a class="inline no-wrap" href="https://www.bu.edu/library/services">Find &amp; Borrow</a>
                  <div class="submenu">
                    <ul id="find-and-borrow" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>FIND</span>
                          <li><a href="https://www.bu.edu/library/search">Search</a></li>
                          <li><a href="https://library.bu.edu/az.php">Databases A-Z</a></li>
                          <li><a href="https://www.bu.edu/library/services/reserves/">Course Materials (Reserves)</a></li>
                          <li><a href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=journals&lang=en_US">eJournals</a></li>
                          <li><a href="http://bu.on.worldcat.org/">WorldCat Discovery</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>COLLECTIONS</span>
                          <li><a href="https://open.bu.edu/">OpenBU</a></li>
                          <li><a href="https://open.bu.edu/handle/2144/8520">Theses &amp; Dissertations</a></li>
                          <li><a href="http://archives.bu.edu/">Archives</a></li>
                          <li><a href="http://www.bu.edu/library/mugar-memorial/research/krasker-filmvideo/">Krasker Film / Video</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>BORROWING</span>
                          <li><a href="https://www.bu.edu/library/services/borrowing/">Borrowing</a></li>
                          <li><a href="https://www.bu.edu/library/services/circulation/">Circulation</a></li>
                          <li><a href="https://www.bu.edu/library/services/ill/">Inter-Library Borrowing</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/research">Research &amp; Learning</a>
                  <div class="submenu">
                    <ul id="research-and-learning" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SUPPORT</span>
                          <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li>
                          <li><a href="https://www.bu.edu/library/services/reference/appointments/">Make an Appointment</a></li>
                          <li><a href="https://www.bu.edu/library/services/reference/writing-centers/">Writing Center</a></li>
                          <li><a href="https://www.bu.edu/library/services/for-faculty/">For Faculty</a></li>
                          <li><a href="https://www.bu.edu/library/services/alumni/">For Alumni</a></li>
                          <li><a href="https://www.bu.edu/library/services/for-graduate-students/">For Graduate Students</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet"  tabindex="0">
                          <span>GUIDES</span>
                          <li><a href="https://library.bu.edu/guides/">Research Guides</a></li>
                          <li><a href="https://www.bu.edu/library/research/guides/course-guides/">Course Guides</a></li>
                          <li><a href="https://www.bu.edu/library/help/how-to/">How-To Guides</a></li>
                          <li><a href="https://www-staging.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                          <li><a href="https://library.bu.edu/create_bibliographies">Creating Bibliographies</a></li>
                        </ul>
                      </li>
                      <!-- <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>FOR FACULTY</span>
                          <li><a>Scanning &amp; Delivery</a></li>
                          <li><a>Course Materials (Reserves)</a></li>
                          <li><a>Place Item on Reserve</a></li>
                          <li><a>Remote Teaching &amp; Learning</a></li>
                          <li><a>All Faculty Services</a></li>
                        </ul>
                      </li> -->
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SERVICES</span>
                          <li><a href="https://www.bu.edu/library/services/scanning-delivery-services/">Scanning &amp; Delivery</a></li>
                          <li><a href="https://www.bu.edu/library/services/reserves/">Course Materials (Reserves)</a></li>
                          <li><a href="https://www.bu.edu/data/">Data Services</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>  
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/about">About Us</a>
                  <div class="submenu">
                    <ul id="about-us" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SPACES</span>
                          <li><a href="https://www.bu.edu/library/about/hours/">Library &amp; Service Hours</a></li>
                          <li><a>Visiting the Libraries</a></li>
                          <li><a href="https://www.bu.edu/library/about/study-spaces/">Study Rooms &amp; Spaces</a></li>
                          <li><a href="https://www.bu.edu/library/about/maps-floorplans/">Maps &amp; Floorplans</a></li>
                          <li><a href="https://www.bu.edu/library/services/computers-and-printing/">Computers, Printing, Scanning</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>INFO</span>
                          <li><a href="https://www.bu.edu/library/about/news/">News &amp; Updates</a></li>
                          <li><a href="https://www.bu.edu/library/about/who-we-are/staff-directory/">Staff Directory A-Z</a></li>
                          <li><a href="https://www.bu.edu/library/about">About BU Libraries</a></li>
                          <li><a>Events Calendar</a></li>
                          <li><a href="https://www.bu.edu/library/about/code-of-conduct/">Code of Conduct</a></li>
                        </ul> 
                      </li> 
                    </ul>
                  </div>
                </li>
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/about">Locations</a>
                  <div class="submenu">
                    <ul id="locations" class="submenu-items flexnw"  tabindex="0">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span><a href="https://www.bu.edu/library/about">ALL LOCATIONS</a></span>
                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    
                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  
                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  
                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li> 
                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> 
                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  
                          <li><a href="https://www.bu.edu/library/sel/">Science &amp; Engineering Library</a></li>  
                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span><a href="https://www.bu.edu/library/about/additional-libraries/">ADDITIONAL LIBRARIES</a></span>
                          <li><a href="https://www.bu.edu/anthrop/about/library/">Anthropology Department Library</a></li>  
                          <li><a href="https://www.bu.edu/cfa/current-students/music-resources/music-curriculum-library/">CFA Music Curriculum Library</a></li>  
                          <li><a href="https://www.bu.edu/geddes/">Geddes Language Center</a></li>  
                          <li><a href="https://www.bu.edu/library/african-studies/">Law Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Medical Library</a></li>
                          <li><a href="https://www.bu.edu/africa/outreach/outreach-library/">Teaching Africa Library</a></li>  
                          <li><a href="https://www.bu.edu/cfa/creative-research/learn/libraries/library/">Visual Arts Resource Library</a></li>  
                          <li><a href="https://www.bu.edu/ah/vrc/" target="_blank" rel="noopener">Visual Resources Center</a></li>  
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li> 
              </ul>
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>
                    
                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  
                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>
                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  
                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> 
                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>
                    <li><hr></li>
                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  
                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
      <br /><br /><br /><br /><br />
    `)),r("p",null,"For the time being, there's a ",r("inlineCode",{parentName:"p"},"bulib-submenu")," that powers the list of items with them.\nThis should be temporary and is a work-around to encapsulate/protect against wordpress\nheader styling."),r(t,{mdxType:"Preview"},r(u,{name:"header-submenu",mdxType:"Story"},a`
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li class="menu-item">
                  <a class="inline no-wrap" href="https://www.bu.edu/library/services">
                    <span class="txt-wrap">Find &amp; Borrow</span><i class="material-icons">arrow_drop_down</i>
                  </a>
                  <div class="submenu"><bulib-submenu code="find-and-borrow" class="full-width"></bulib-submenu></div>
                </li>
                <li class="menu-item">
                  <a href="/library/research">
                    <span>Research &amp; Learn</span><i class="material-icons">arrow_drop_down</i>
                  </a>
                  <div class="submenu"><bulib-submenu code="research-and-learn" class="full-width"></bulib-submenu></div>
                </li>  
                <li class="menu-item">
                  <a href="/library/about">
                    <span class="txt-wrap">About Us</span><i class="material-icons">arrow_drop_down</i>
                  </a>
                  <div class="submenu"><bulib-submenu code="about-us" class="full-width"></bulib-submenu></div>
                </li>
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/about">
                    <span>Locations</span><i class="material-icons">arrow_drop_down</i>
                  </a>
                  <div class="submenu"><bulib-submenu code="locations" class="full-width"></bulib-submenu></div>
                </li> 
              </ul>
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>
                    
                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  
                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>
                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  
                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> 
                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>
                    <li><hr></li>
                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  
                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
      <br /><br /><br /><br /><br />
    `)),r("h2",null,"Banner"),r("p",null,"Contains Site-Specific Code/links, and normally a ",r("inlineCode",{parentName:"p"},"<bulib-search>")," (if one's not already present on the home page)."),r("p",null,"Links for a hierarchy of '",r("strong",{parentName:"p"},"parent"),": child' (unless otherwise specified), and should take you back to the site landing page (/)."),r(t,{mdxType:"Preview"},r(u,{name:"site-banner",mdxType:"Story"},a`
      <div class="banner-wrapper">
        <div class="banner">
          <span><a href="/">Ask a Librarian:</a> <a href="/businessFAQs">Business FAQs</a></span>
          <bulib-search str_options="pardee-help primo"></bulib-search>
        </div>
      </div>
    `)),r("p",null,"The wordpress banner has a ",r("inlineCode",{parentName:"p"},"section")," on the left that includes a ",r("inlineCode",{parentName:"p"},"#genus")," and ",r("inlineCode",{parentName:"p"},"#species"),r("br",{parentName:"p"}),"\n","that is loaded via a script from the ",r("inlineCode",{parentName:"p"},"window.location.path"),". That script also loads in\nthe ",r("inlineCode",{parentName:"p"},"bulib-hours")," component."),r(t,{mdxType:"Preview"},r(u,{name:"site-banner-wp",mdxType:"Story"},a`
      <style type="text/css">
        body {
          --bulib-search-padding: 5px;
          --bulib-search-options-padding: 4px;
        }
      </style>
      <div class="banner-wrapper">
        <div class="banner">
          <section>
            <span class="flexw">
              <a id="genus" href="/library-responsive/mugar-memorial/">Mugar Memorial Library</a>
              <a id="species" href="/library-responsive/mugar-memorial/services">:&nbsp; Services</a>
            </span>
            <span id="hours-display" class="flexw small-text txtv">
              hours: &nbsp; <bulib-hours library="mugar-memorial" short></bulib-hours>
            </span>
          </section> 
          <bulib-search str_options="wp primo guides" class="prm secondary"></bulib-search>
        </div>
      </div>
    `)),r("p",null,"LibCal exception case in which the site is dual-purpose (has two landing pages)."),r(t,{mdxType:"Preview"},r(u,{name:"site-banner-libcal",mdxType:"Story"},a`
      <div class="banner-wrapper">
        <div class="banner">
          <span>
            <strong><a href="/calendar">Events</a></strong> &nbsp; and &nbsp;
            <strong><a href="https://www.bu.edu/library/about/study-spaces">Reservations</a></strong>
          </span>
        </div>
      </div>
    `)),r("p",null,"The banner can be modified to include additional content, so long as it's contained in a single\ncontainer (e.g. ",r("inlineCode",{parentName:"p"},"div")," or ",r("inlineCode",{parentName:"p"},"section"),")"),r(t,{mdxType:"Preview"},r(u,{name:"site-banner-libguides",mdxType:"Story"},a`
      <style type="text/css">
        div.banner-wrapper { --bulib-search-min-width: 100vw; --bulib-search-options-padding: 5px; }
        div.banner-wrapper bulib-search { width: -webkit-fill-available; }
      </style>
      <div class="banner-wrapper">
        <div class="banner" id="s-lg-guide-header-info">
          <span class="prl"><a href="/guides" class="bigger-text">Research Guides</a></span>
            <bulib-search class="secondary" str_options="wp primo guides" str_selected="guides">
              <form action="https://library.bu.edu/srch.php" class="full-width txtc flexnw">
                <input name="q" class="full-width plm" placeholder="Search all guides" type="text">
                <button class="bulib-btn man" type="submit" value="Search"><i class="material-icons">search</i></button>
            </form>
            </bulib-search>
        </div>
      </div>
    `)))}d.isMDXComponent=!0;const p=i(a`
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  
                <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  
                <li id="subsite-about"><a href="https://www.bu.edu/library/about">About Us</a></li>
                <li>  
                  <div class="dropdown">  
                      <a class="menu-item inline" href="https://www.bu.edu/library/about">  
                        <span class="prs">Locations</span><i class="material-icons inline">arrow_drop_down</i>  
                      </a>  
                    <div class="dropdown-content">  
                        <ul class="library-list no-bullet"> 
                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    
                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  
                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  
                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li>  
                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> 
                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  
                          <li><a href="https://www.bu.edu/library/sel/">Science & Engineering Library</a></li>  
                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  
                          <li><a href="https://www.bu.edu/library/about/additional-libraries/">Additional Libraries</a></li>  
                        </ul> 
                    </div>  
                  </div>  
                </li> 
              </ul> 
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>
                    
                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  
                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>
                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  
                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> 
                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>
                    <li><hr></li>
                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  
                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
      <br /><br /><br /><br /><br />
    `);p.story={},p.story.name="header",p.story.parameters={mdxSource:'html`\n      <div class="header-wrapper">\n        <nav>\n          <a class="sr-only" href="#content">Skip to Main Content</a>\n          <div class="primary-navbar">  \n            <div class="primary-nav-left">  \n              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> \n                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> \n              </a>  \n            </div>  \n            <div class="primary-nav-main menu-items-wrapper"> \n              <ul class="menu-items">\n                <li id="subsite-research"><a href="https://www.bu.edu/library/services">Find & Borrow</a></li>  \n                <li id="subsite-services"><a href="https://www.bu.edu/library/research">Research & Learning</a></li>  \n                <li id="subsite-about"><a href="https://www.bu.edu/library/about">About Us</a></li>\n                <li>  \n                  <div class="dropdown">  \n                      <a class="menu-item inline" href="https://www.bu.edu/library/about">  \n                        <span class="prs">Locations</span><i class="material-icons inline">arrow_drop_down</i>  \n                      </a>  \n                    <div class="dropdown-content">  \n                        <ul class="library-list no-bullet"> \n                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    \n                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  \n                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> \n                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/sel/">Science & Engineering Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/about/additional-libraries/">Additional Libraries</a></li>  \n                        </ul> \n                    </div>  \n                  </div>  \n                </li> \n              </ul> \n            </div>  \n            <div class="primary-nav-right"> \n              <div class="mobile-navigation none" aria-hidden="true"> \n                <div id="menuToggle"> \n                  \x3c!-- invisible toggle with hamburger --\x3e  \n                  <input type="checkbox" tabindex="-1">\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                    \n                  \x3c!-- mobile nav menu --\x3e  \n                  <ul id="mobile-menu"> \n                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  \n                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>\n                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>\n                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  \n                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> \n                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>\n                    <li><hr></li>\n                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  \n                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  \n                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  \n                  </ul> \n                </div>  \n              </div>  \n              <div class="top-right"> \n                <ul class="menu-items">\t\n                  <li>\t\n                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">\t\n                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>\t\n                    </a>\t\n                  </li>\t\n                  <li>\t\n                    <a class="menu-item inline" href="https://www.bu.edu/library/account">\t\n                      <span class="prm">My Account</span><i class="material-icons inline">person</i>\t\n                    </a>\t\n                  </li>\t\n                </ul>\n              </div>  \n            </div>  \n          </div>\n          <script id="mobile-nav-clickout" type="text/javascript">\n            let input = document.querySelector("#menuToggle > input");\n            window.addEventListener("click", (event) => {\n              let clicked = event.target;\n              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;\n              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){\n                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav\n              }\n            });\n          <\/script>\n        </nav>\n      </div>\n      <br /><br /><br /><br /><br />\n    `'};const h=i(a`
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li class="menu-item">
                  <a class="inline no-wrap" href="https://www.bu.edu/library/services">Find &amp; Borrow</a>
                  <div class="submenu">
                    <ul id="find-and-borrow" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>FIND</span>
                          <li><a href="https://www.bu.edu/library/search">Search</a></li>
                          <li><a href="https://library.bu.edu/az.php">Databases A-Z</a></li>
                          <li><a href="https://www.bu.edu/library/services/reserves/">Course Materials (Reserves)</a></li>
                          <li><a href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=journals&lang=en_US">eJournals</a></li>
                          <li><a href="http://bu.on.worldcat.org/">WorldCat Discovery</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>COLLECTIONS</span>
                          <li><a href="https://open.bu.edu/">OpenBU</a></li>
                          <li><a href="https://open.bu.edu/handle/2144/8520">Theses &amp; Dissertations</a></li>
                          <li><a href="http://archives.bu.edu/">Archives</a></li>
                          <li><a href="http://www.bu.edu/library/mugar-memorial/research/krasker-filmvideo/">Krasker Film / Video</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>BORROWING</span>
                          <li><a href="https://www.bu.edu/library/services/borrowing/">Borrowing</a></li>
                          <li><a href="https://www.bu.edu/library/services/circulation/">Circulation</a></li>
                          <li><a href="https://www.bu.edu/library/services/ill/">Inter-Library Borrowing</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/research">Research &amp; Learning</a>
                  <div class="submenu">
                    <ul id="research-and-learning" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SUPPORT</span>
                          <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li>
                          <li><a href="https://www.bu.edu/library/services/reference/appointments/">Make an Appointment</a></li>
                          <li><a href="https://www.bu.edu/library/services/reference/writing-centers/">Writing Center</a></li>
                          <li><a href="https://www.bu.edu/library/services/for-faculty/">For Faculty</a></li>
                          <li><a href="https://www.bu.edu/library/services/alumni/">For Alumni</a></li>
                          <li><a href="https://www.bu.edu/library/services/for-graduate-students/">For Graduate Students</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet"  tabindex="0">
                          <span>GUIDES</span>
                          <li><a href="https://library.bu.edu/guides/">Research Guides</a></li>
                          <li><a href="https://www.bu.edu/library/research/guides/course-guides/">Course Guides</a></li>
                          <li><a href="https://www.bu.edu/library/help/how-to/">How-To Guides</a></li>
                          <li><a href="https://www-staging.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                          <li><a href="https://library.bu.edu/create_bibliographies">Creating Bibliographies</a></li>
                        </ul>
                      </li>
                      <!-- <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>FOR FACULTY</span>
                          <li><a>Scanning &amp; Delivery</a></li>
                          <li><a>Course Materials (Reserves)</a></li>
                          <li><a>Place Item on Reserve</a></li>
                          <li><a>Remote Teaching &amp; Learning</a></li>
                          <li><a>All Faculty Services</a></li>
                        </ul>
                      </li> -->
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SERVICES</span>
                          <li><a href="https://www.bu.edu/library/services/scanning-delivery-services/">Scanning &amp; Delivery</a></li>
                          <li><a href="https://www.bu.edu/library/services/reserves/">Course Materials (Reserves)</a></li>
                          <li><a href="https://www.bu.edu/data/">Data Services</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>  
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/about">About Us</a>
                  <div class="submenu">
                    <ul id="about-us" class="submenu-items flexnw">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>SPACES</span>
                          <li><a href="https://www.bu.edu/library/about/hours/">Library &amp; Service Hours</a></li>
                          <li><a>Visiting the Libraries</a></li>
                          <li><a href="https://www.bu.edu/library/about/study-spaces/">Study Rooms &amp; Spaces</a></li>
                          <li><a href="https://www.bu.edu/library/about/maps-floorplans/">Maps &amp; Floorplans</a></li>
                          <li><a href="https://www.bu.edu/library/services/computers-and-printing/">Computers, Printing, Scanning</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span>INFO</span>
                          <li><a href="https://www.bu.edu/library/about/news/">News &amp; Updates</a></li>
                          <li><a href="https://www.bu.edu/library/about/who-we-are/staff-directory/">Staff Directory A-Z</a></li>
                          <li><a href="https://www.bu.edu/library/about">About BU Libraries</a></li>
                          <li><a>Events Calendar</a></li>
                          <li><a href="https://www.bu.edu/library/about/code-of-conduct/">Code of Conduct</a></li>
                        </ul> 
                      </li> 
                    </ul>
                  </div>
                </li>
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/about">Locations</a>
                  <div class="submenu">
                    <ul id="locations" class="submenu-items flexnw"  tabindex="0">
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span><a href="https://www.bu.edu/library/about">ALL LOCATIONS</a></span>
                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    
                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  
                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  
                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li> 
                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> 
                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  
                          <li><a href="https://www.bu.edu/library/sel/">Science &amp; Engineering Library</a></li>  
                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  
                        </ul>
                      </li>
                      <li>
                        <ul class="no-bullet" tabindex="0">
                          <span><a href="https://www.bu.edu/library/about/additional-libraries/">ADDITIONAL LIBRARIES</a></span>
                          <li><a href="https://www.bu.edu/anthrop/about/library/">Anthropology Department Library</a></li>  
                          <li><a href="https://www.bu.edu/cfa/current-students/music-resources/music-curriculum-library/">CFA Music Curriculum Library</a></li>  
                          <li><a href="https://www.bu.edu/geddes/">Geddes Language Center</a></li>  
                          <li><a href="https://www.bu.edu/library/african-studies/">Law Library</a></li>  
                          <li><a href="https://www.bu.edu/library/astronomy/">Medical Library</a></li>
                          <li><a href="https://www.bu.edu/africa/outreach/outreach-library/">Teaching Africa Library</a></li>  
                          <li><a href="https://www.bu.edu/cfa/creative-research/learn/libraries/library/">Visual Arts Resource Library</a></li>  
                          <li><a href="https://www.bu.edu/ah/vrc/" target="_blank" rel="noopener">Visual Resources Center</a></li>  
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li> 
              </ul>
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>
                    
                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  
                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>
                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  
                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> 
                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>
                    <li><hr></li>
                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  
                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
      <br /><br /><br /><br /><br />
    `);h.story={},h.story.name="header-advanced",h.story.parameters={mdxSource:'html`\n      <div class="header-wrapper">\n        <nav>\n          <a class="sr-only" href="#content">Skip to Main Content</a>\n          <div class="primary-navbar">  \n            <div class="primary-nav-left">  \n              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> \n                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> \n              </a>  \n            </div>  \n            <div class="primary-nav-main menu-items-wrapper"> \n              <ul class="menu-items">\n                <li class="menu-item">\n                  <a class="inline no-wrap" href="https://www.bu.edu/library/services">Find &amp; Borrow</a>\n                  <div class="submenu">\n                    <ul id="find-and-borrow" class="submenu-items flexnw">\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span>FIND</span>\n                          <li><a href="https://www.bu.edu/library/search">Search</a></li>\n                          <li><a href="https://library.bu.edu/az.php">Databases A-Z</a></li>\n                          <li><a href="https://www.bu.edu/library/services/reserves/">Course Materials (Reserves)</a></li>\n                          <li><a href="https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=journals&lang=en_US">eJournals</a></li>\n                          <li><a href="http://bu.on.worldcat.org/">WorldCat Discovery</a></li>\n                        </ul>\n                      </li>\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span>COLLECTIONS</span>\n                          <li><a href="https://open.bu.edu/">OpenBU</a></li>\n                          <li><a href="https://open.bu.edu/handle/2144/8520">Theses &amp; Dissertations</a></li>\n                          <li><a href="http://archives.bu.edu/">Archives</a></li>\n                          <li><a href="http://www.bu.edu/library/mugar-memorial/research/krasker-filmvideo/">Krasker Film / Video</a></li>\n                        </ul>\n                      </li>\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span>BORROWING</span>\n                          <li><a href="https://www.bu.edu/library/services/borrowing/">Borrowing</a></li>\n                          <li><a href="https://www.bu.edu/library/services/circulation/">Circulation</a></li>\n                          <li><a href="https://www.bu.edu/library/services/ill/">Inter-Library Borrowing</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n                <li class="menu-item">\n                  <a href="https://www.bu.edu/library/research">Research &amp; Learning</a>\n                  <div class="submenu">\n                    <ul id="research-and-learning" class="submenu-items flexnw">\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span>SUPPORT</span>\n                          <li><a href="https://askalibrarian.bu.edu/">Ask a Librarian</a></li>\n                          <li><a href="https://www.bu.edu/library/services/reference/appointments/">Make an Appointment</a></li>\n                          <li><a href="https://www.bu.edu/library/services/reference/writing-centers/">Writing Center</a></li>\n                          <li><a href="https://www.bu.edu/library/services/for-faculty/">For Faculty</a></li>\n                          <li><a href="https://www.bu.edu/library/services/alumni/">For Alumni</a></li>\n                          <li><a href="https://www.bu.edu/library/services/for-graduate-students/">For Graduate Students</a></li>\n                        </ul>\n                      </li>\n                      <li>\n                        <ul class="no-bullet"  tabindex="0">\n                          <span>GUIDES</span>\n                          <li><a href="https://library.bu.edu/guides/">Research Guides</a></li>\n                          <li><a href="https://www.bu.edu/library/research/guides/course-guides/">Course Guides</a></li>\n                          <li><a href="https://www.bu.edu/library/help/how-to/">How-To Guides</a></li>\n                          <li><a href="https://www-staging.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>\n                          <li><a href="https://library.bu.edu/create_bibliographies">Creating Bibliographies</a></li>\n                        </ul>\n                      </li>\n                      \x3c!-- <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span>FOR FACULTY</span>\n                          <li><a>Scanning &amp; Delivery</a></li>\n                          <li><a>Course Materials (Reserves)</a></li>\n                          <li><a>Place Item on Reserve</a></li>\n                          <li><a>Remote Teaching &amp; Learning</a></li>\n                          <li><a>All Faculty Services</a></li>\n                        </ul>\n                      </li> --\x3e\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span>SERVICES</span>\n                          <li><a href="https://www.bu.edu/library/services/scanning-delivery-services/">Scanning &amp; Delivery</a></li>\n                          <li><a href="https://www.bu.edu/library/services/reserves/">Course Materials (Reserves)</a></li>\n                          <li><a href="https://www.bu.edu/data/">Data Services</a></li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li>  \n                <li class="menu-item">\n                  <a href="https://www.bu.edu/library/about">About Us</a>\n                  <div class="submenu">\n                    <ul id="about-us" class="submenu-items flexnw">\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span>SPACES</span>\n                          <li><a href="https://www.bu.edu/library/about/hours/">Library &amp; Service Hours</a></li>\n                          <li><a>Visiting the Libraries</a></li>\n                          <li><a href="https://www.bu.edu/library/about/study-spaces/">Study Rooms &amp; Spaces</a></li>\n                          <li><a href="https://www.bu.edu/library/about/maps-floorplans/">Maps &amp; Floorplans</a></li>\n                          <li><a href="https://www.bu.edu/library/services/computers-and-printing/">Computers, Printing, Scanning</a></li>\n                        </ul>\n                      </li>\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span>INFO</span>\n                          <li><a href="https://www.bu.edu/library/about/news/">News &amp; Updates</a></li>\n                          <li><a href="https://www.bu.edu/library/about/who-we-are/staff-directory/">Staff Directory A-Z</a></li>\n                          <li><a href="https://www.bu.edu/library/about">About BU Libraries</a></li>\n                          <li><a>Events Calendar</a></li>\n                          <li><a href="https://www.bu.edu/library/about/code-of-conduct/">Code of Conduct</a></li>\n                        </ul> \n                      </li> \n                    </ul>\n                  </div>\n                </li>\n                <li class="menu-item">\n                  <a href="https://www.bu.edu/library/about">Locations</a>\n                  <div class="submenu">\n                    <ul id="locations" class="submenu-items flexnw"  tabindex="0">\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span><a href="https://www.bu.edu/library/about">ALL LOCATIONS</a></span>\n                          <li><a href="https://www.bu.edu/library/african-studies/">African Studies Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/astronomy/">Astronomy Library</a></li>    \n                          <li><a href="http://archives.bu.edu/">Howard Gotlieb Archival Research Center</a></li>  \n                          <li><a href="https://www.bu.edu/library/mugar-memorial/">Mugar Memorial Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/music/">Music Library</a></li> \n                          <li><a href="https://www.bu.edu/library/management/">Pardee Management Library</a></li> \n                          <li><a href="https://www.bu.edu/library/pickering-educational/">Pickering Educational Resources Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/sel/">Science &amp; Engineering Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/stone-science/">Stone Science Library</a></li>  \n                        </ul>\n                      </li>\n                      <li>\n                        <ul class="no-bullet" tabindex="0">\n                          <span><a href="https://www.bu.edu/library/about/additional-libraries/">ADDITIONAL LIBRARIES</a></span>\n                          <li><a href="https://www.bu.edu/anthrop/about/library/">Anthropology Department Library</a></li>  \n                          <li><a href="https://www.bu.edu/cfa/current-students/music-resources/music-curriculum-library/">CFA Music Curriculum Library</a></li>  \n                          <li><a href="https://www.bu.edu/geddes/">Geddes Language Center</a></li>  \n                          <li><a href="https://www.bu.edu/library/african-studies/">Law Library</a></li>  \n                          <li><a href="https://www.bu.edu/library/astronomy/">Medical Library</a></li>\n                          <li><a href="https://www.bu.edu/africa/outreach/outreach-library/">Teaching Africa Library</a></li>  \n                          <li><a href="https://www.bu.edu/cfa/creative-research/learn/libraries/library/">Visual Arts Resource Library</a></li>  \n                          <li><a href="https://www.bu.edu/ah/vrc/" target="_blank" rel="noopener">Visual Resources Center</a></li>  \n                        </ul>\n                      </li>\n                    </ul>\n                  </div>\n                </li> \n              </ul>\n            </div>  \n            <div class="primary-nav-right"> \n              <div class="mobile-navigation none" aria-hidden="true"> \n                <div id="menuToggle"> \n                  \x3c!-- invisible toggle with hamburger --\x3e  \n                  <input type="checkbox" tabindex="-1">\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                    \n                  \x3c!-- mobile nav menu --\x3e  \n                  <ul id="mobile-menu"> \n                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  \n                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>\n                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>\n                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  \n                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> \n                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>\n                    <li><hr></li>\n                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  \n                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  \n                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  \n                  </ul> \n                </div>  \n              </div>  \n              <div class="top-right"> \n                <ul class="menu-items">\t\n                  <li>\t\n                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">\t\n                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>\t\n                    </a>\t\n                  </li>\t\n                  <li>\t\n                    <a class="menu-item inline" href="https://www.bu.edu/library/account">\t\n                      <span class="prm">My Account</span><i class="material-icons inline">person</i>\t\n                    </a>\t\n                  </li>\t\n                </ul>\n              </div>  \n            </div>  \n          </div>\n          <script id="mobile-nav-clickout" type="text/javascript">\n            let input = document.querySelector("#menuToggle > input");\n            window.addEventListener("click", (event) => {\n              let clicked = event.target;\n              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;\n              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){\n                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav\n              }\n            });\n          <\/script>\n        </nav>\n      </div>\n      <br /><br /><br /><br /><br />\n    `'};const w=i(a`
      <div class="header-wrapper">
        <nav>
          <a class="sr-only" href="#content">Skip to Main Content</a>
          <div class="primary-navbar">  
            <div class="primary-nav-left">  
              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> 
                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> 
              </a>  
            </div>  
            <div class="primary-nav-main menu-items-wrapper"> 
              <ul class="menu-items">
                <li class="menu-item">
                  <a class="inline no-wrap" href="https://www.bu.edu/library/services">
                    <span class="txt-wrap">Find &amp; Borrow</span><i class="material-icons">arrow_drop_down</i>
                  </a>
                  <div class="submenu"><bulib-submenu code="find-and-borrow" class="full-width"></bulib-submenu></div>
                </li>
                <li class="menu-item">
                  <a href="/library/research">
                    <span>Research &amp; Learn</span><i class="material-icons">arrow_drop_down</i>
                  </a>
                  <div class="submenu"><bulib-submenu code="research-and-learn" class="full-width"></bulib-submenu></div>
                </li>  
                <li class="menu-item">
                  <a href="/library/about">
                    <span class="txt-wrap">About Us</span><i class="material-icons">arrow_drop_down</i>
                  </a>
                  <div class="submenu"><bulib-submenu code="about-us" class="full-width"></bulib-submenu></div>
                </li>
                <li class="menu-item">
                  <a href="https://www.bu.edu/library/about">
                    <span>Locations</span><i class="material-icons">arrow_drop_down</i>
                  </a>
                  <div class="submenu"><bulib-submenu code="locations" class="full-width"></bulib-submenu></div>
                </li> 
              </ul>
            </div>  
            <div class="primary-nav-right"> 
              <div class="mobile-navigation none" aria-hidden="true"> 
                <div id="menuToggle"> 
                  <!-- invisible toggle with hamburger -->  
                  <input type="checkbox" tabindex="-1">
                  <span></span>
                  <span></span>
                  <span></span>
                    
                  <!-- mobile nav menu -->  
                  <ul id="mobile-menu"> 
                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  
                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>
                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>
                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  
                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> 
                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>
                    <li><hr></li>
                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  
                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  
                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  
                  </ul> 
                </div>  
              </div>  
              <div class="top-right"> 
                <ul class="menu-items">	
                  <li>	
                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">	
                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>	
                    </a>	
                  </li>	
                  <li>	
                    <a class="menu-item inline" href="https://www.bu.edu/library/account">	
                      <span class="prm">My Account</span><i class="material-icons inline">person</i>	
                    </a>	
                  </li>	
                </ul>
              </div>  
            </div>  
          </div>
          <script id="mobile-nav-clickout" type="text/javascript">
            let input = document.querySelector("#menuToggle > input");
            window.addEventListener("click", (event) => {
              let clicked = event.target;
              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;
              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){
                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav
              }
            });
          </script>
        </nav>
      </div>
      <br /><br /><br /><br /><br />
    `);w.story={},w.story.name="header-submenu",w.story.parameters={mdxSource:'html`\n      <div class="header-wrapper">\n        <nav>\n          <a class="sr-only" href="#content">Skip to Main Content</a>\n          <div class="primary-navbar">  \n            <div class="primary-nav-left">  \n              <a title="BU Libraries Homepage" href="https://www.bu.edu/library"> \n                <img id="bu-logo" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/bulib-logo.png"> \n              </a>  \n            </div>  \n            <div class="primary-nav-main menu-items-wrapper"> \n              <ul class="menu-items">\n                <li class="menu-item">\n                  <a class="inline no-wrap" href="https://www.bu.edu/library/services">\n                    <span class="txt-wrap">Find &amp; Borrow</span><i class="material-icons">arrow_drop_down</i>\n                  </a>\n                  <div class="submenu"><bulib-submenu code="find-and-borrow" class="full-width"></bulib-submenu></div>\n                </li>\n                <li class="menu-item">\n                  <a href="/library/research">\n                    <span>Research &amp; Learn</span><i class="material-icons">arrow_drop_down</i>\n                  </a>\n                  <div class="submenu"><bulib-submenu code="research-and-learn" class="full-width"></bulib-submenu></div>\n                </li>  \n                <li class="menu-item">\n                  <a href="/library/about">\n                    <span class="txt-wrap">About Us</span><i class="material-icons">arrow_drop_down</i>\n                  </a>\n                  <div class="submenu"><bulib-submenu code="about-us" class="full-width"></bulib-submenu></div>\n                </li>\n                <li class="menu-item">\n                  <a href="https://www.bu.edu/library/about">\n                    <span>Locations</span><i class="material-icons">arrow_drop_down</i>\n                  </a>\n                  <div class="submenu"><bulib-submenu code="locations" class="full-width"></bulib-submenu></div>\n                </li> \n              </ul>\n            </div>  \n            <div class="primary-nav-right"> \n              <div class="mobile-navigation none" aria-hidden="true"> \n                <div id="menuToggle"> \n                  \x3c!-- invisible toggle with hamburger --\x3e  \n                  <input type="checkbox" tabindex="-1">\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                    \n                  \x3c!-- mobile nav menu --\x3e  \n                  <ul id="mobile-menu"> \n                    <li><a href="https://www.bu.edu/library/search">BU Libraries Search</a></li>  \n                    <li><a href="https://www.bu.edu/library/help/using-the-libraries-online/">Using the Libraries Online</a></li>\n                    <li><a href="https://www.bu.edu/library/help/visiting-the-libraries/">Visiting the Libraries</a></li>\n                    <li><a href="https://www.bu.edu/library/about/hours/">Library Hours</a></li>  \n                    <li><a href="https://www.bu.edu/library/about">Locations</a></li> \n                    <li><a href="https://www.bu.edu/library/about/maps-floorplans">Maps and Floorplans</a></li>\n                    <li><hr></li>\n                    <li><a href="https://www.bu.edu/library/">Libraries Home</a></li>  \n                    <li><a href="https://askalibrarian.bu.edu">Ask a Librarian</a></li>  \n                    <li><a href="https://www.bu.edu/library/account">My Account</a></li>  \n                  </ul> \n                </div>  \n              </div>  \n              <div class="top-right"> \n                <ul class="menu-items">\t\n                  <li>\t\n                    <a class="menu-item inline" href="https://askalibrarian.bu.edu/">\t\n                      <span class="prm">Ask a Librarian</span><i class="material-icons inline">question_answer</i>\t\n                    </a>\t\n                  </li>\t\n                  <li>\t\n                    <a class="menu-item inline" href="https://www.bu.edu/library/account">\t\n                      <span class="prm">My Account</span><i class="material-icons inline">person</i>\t\n                    </a>\t\n                  </li>\t\n                </ul>\n              </div>  \n            </div>  \n          </div>\n          <script id="mobile-nav-clickout" type="text/javascript">\n            let input = document.querySelector("#menuToggle > input");\n            window.addEventListener("click", (event) => {\n              let clicked = event.target;\n              let clicked_within_mobile_menu = clicked.closest("#menuToggle") != null;\n              if(input && clicked != input && !clicked_within_mobile_menu || clicked.tagName == "A"){\n                input.checked = false; // uncheck the #menuToggle input, closing the mobile nav\n              }\n            });\n          <\/script>\n        </nav>\n      </div>\n      <br /><br /><br /><br /><br />\n    `'};const m=i(a`
      <div class="banner-wrapper">
        <div class="banner">
          <span><a href="/">Ask a Librarian:</a> <a href="/businessFAQs">Business FAQs</a></span>
          <bulib-search str_options="pardee-help primo"></bulib-search>
        </div>
      </div>
    `);m.story={},m.story.name="site-banner",m.story.parameters={mdxSource:'html`\n      <div class="banner-wrapper">\n        <div class="banner">\n          <span><a href="/">Ask a Librarian:</a> <a href="/businessFAQs">Business FAQs</a></span>\n          <bulib-search str_options="pardee-help primo"></bulib-search>\n        </div>\n      </div>\n    `'};const y=i(a`
      <style type="text/css">
        body {
          --bulib-search-padding: 5px;
          --bulib-search-options-padding: 4px;
        }
      </style>
      <div class="banner-wrapper">
        <div class="banner">
          <section>
            <span class="flexw">
              <a id="genus" href="/library-responsive/mugar-memorial/">Mugar Memorial Library</a>
              <a id="species" href="/library-responsive/mugar-memorial/services">:&nbsp; Services</a>
            </span>
            <span id="hours-display" class="flexw small-text txtv">
              hours: &nbsp; <bulib-hours library="mugar-memorial" short></bulib-hours>
            </span>
          </section> 
          <bulib-search str_options="wp primo guides" class="prm secondary"></bulib-search>
        </div>
      </div>
    `);y.story={},y.story.name="site-banner-wp",y.story.parameters={mdxSource:'html`\n      <style type="text/css">\n        body {\n          --bulib-search-padding: 5px;\n          --bulib-search-options-padding: 4px;\n        }\n      </style>\n      <div class="banner-wrapper">\n        <div class="banner">\n          <section>\n            <span class="flexw">\n              <a id="genus" href="/library-responsive/mugar-memorial/">Mugar Memorial Library</a>\n              <a id="species" href="/library-responsive/mugar-memorial/services">:&nbsp; Services</a>\n            </span>\n            <span id="hours-display" class="flexw small-text txtv">\n              hours: &nbsp; <bulib-hours library="mugar-memorial" short></bulib-hours>\n            </span>\n          </section> \n          <bulib-search str_options="wp primo guides" class="prm secondary"></bulib-search>\n        </div>\n      </div>\n    `'};const v=i(a`
      <div class="banner-wrapper">
        <div class="banner">
          <span>
            <strong><a href="/calendar">Events</a></strong> &nbsp; and &nbsp;
            <strong><a href="https://www.bu.edu/library/about/study-spaces">Reservations</a></strong>
          </span>
        </div>
      </div>
    `);v.story={},v.story.name="site-banner-libcal",v.story.parameters={mdxSource:'html`\n      <div class="banner-wrapper">\n        <div class="banner">\n          <span>\n            <strong><a href="/calendar">Events</a></strong> &nbsp; and &nbsp;\n            <strong><a href="https://www.bu.edu/library/about/study-spaces">Reservations</a></strong>\n          </span>\n        </div>\n      </div>\n    `'};const f=i(a`
      <style type="text/css">
        div.banner-wrapper { --bulib-search-min-width: 100vw; --bulib-search-options-padding: 5px; }
        div.banner-wrapper bulib-search { width: -webkit-fill-available; }
      </style>
      <div class="banner-wrapper">
        <div class="banner" id="s-lg-guide-header-info">
          <span class="prl"><a href="/guides" class="bigger-text">Research Guides</a></span>
            <bulib-search class="secondary" str_options="wp primo guides" str_selected="guides">
              <form action="https://library.bu.edu/srch.php" class="full-width txtc flexnw">
                <input name="q" class="full-width plm" placeholder="Search all guides" type="text">
                <button class="bulib-btn man" type="submit" value="Search"><i class="material-icons">search</i></button>
            </form>
            </bulib-search>
        </div>
      </div>
    `);f.story={},f.story.name="site-banner-libguides",f.story.parameters={mdxSource:'html`\n      <style type="text/css">\n        div.banner-wrapper { --bulib-search-min-width: 100vw; --bulib-search-options-padding: 5px; }\n        div.banner-wrapper bulib-search { width: -webkit-fill-available; }\n      </style>\n      <div class="banner-wrapper">\n        <div class="banner" id="s-lg-guide-header-info">\n          <span class="prl"><a href="/guides" class="bigger-text">Research Guides</a></span>\n            <bulib-search class="secondary" str_options="wp primo guides" str_selected="guides">\n              <form action="https://library.bu.edu/srch.php" class="full-width txtc flexnw">\n                <input name="q" class="full-width plm" placeholder="Search all guides" type="text">\n                <button class="bulib-btn man" type="submit" value="Search"><i class="material-icons">search</i></button>\n            </form>\n            </bulib-search>\n        </div>\n      </div>\n    `'};const g={title:"Branding|header",includeStories:["header","headerAdvanced","headerSubmenu","siteBanner","siteBannerWp","siteBannerLibcal","siteBannerLibguides"]},L={header:"branding-header--header","header-advanced":"branding-header--header-advanced","header-submenu":"branding-header--header-submenu","site-banner":"branding-header--site-banner","site-banner-wp":"branding-header--site-banner-wp","site-banner-libcal":"branding-header--site-banner-libcal","site-banner-libguides":"branding-header--site-banner-libguides"};g.parameters=g.parameters||{},g.parameters.docs=e({},g.parameters.docs||{},{page:()=>r(s,{mdxStoryNameToId:L},r(d,null))});export default g;export{p as header,h as headerAdvanced,w as headerSubmenu,m as siteBanner,v as siteBannerLibcal,f as siteBannerLibguides,y as siteBannerWp};
//# sourceMappingURL=header.stories-43450a3c.js.map
