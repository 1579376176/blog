<template>
  <div data-server-rendered="true" id="__nuxt">
    <div id="__layout">
      <div id="juejin">
        <div class="global-component-box">
          <div class="emoji-barrage" data-v-68506677></div>
          <div class="bind-phone-number-modal-box" data-v-2fba547a>
            <div
              st:block="bindPhoneNumberModal"
              class="modal-mask"
              style="display: none"
              data-v-2fba547a
            ></div>
          </div>
        </div>
        <div class="view-container container" data-v-6a3e47cf data-v-48554d55>
          <div class="main-header-box" data-v-6a3e47cf>
            <header
              class="main-header main-header visible"
              data-v-5439243a
              data-v-6a3e47cf
            >
              <div class="container" data-v-5439243a>
                <a href="/" class="logo" data-v-5439243a
                  ><img
                    src="../imgs/logo.svg"
                    alt="万事屋"
                    class="logo-img" />
                  </a>
                <nav role="navigation" class="main-nav" data-v-5439243a>
                  <ul class="nav-list" data-v-5439243a>
                    <li class="main-nav-list" data-v-5439243a>
                      <div class="phone-show-menu" data-v-5439243a>
                        <span data-v-5439243a>首页</span>
                        <div
                          class="icon ion-arrow-down-b"
                          data-v-5439243a
                        ></div>
                      </div>
                      <ul class="phone-hide" data-v-5439243a>
                        <li
                          class="nav-item link-item router-link-exact-active route-active active"
                          data-v-5439243a
                        >
                          <a href="/" aria-current="page" data-v-5439243a
                            >首页</a
                          >
                        </li>
                        <li
                          class="nav-item link-item activities"
                          data-v-5439243a
                        >
                          <a href="/pins" data-v-5439243a>功能</a>
                        </li>
                        <li class="nav-item link-item book" data-v-5439243a>
                          <a href="/books" data-v-5439243a>功能</a>
                        </li>
                        <li class="nav-item link-item" data-v-5439243a>
                          <a href="/events/all" data-v-5439243a>功能</a>
                        </li>
                        <!---->
                      </ul>
                    </li>
                    <li class="nav-item search" data-v-5439243a>
                      <form role="search" class="search-form" data-v-5439243a>
                        <input
                          type="search"
                          maxlength="32"
                          placeholder="探索瀚文的万事屋"
                          value=""
                          class="search-input"
                          data-v-5439243a
                        />
                        <img
                          src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-search-icon.6f8ba1b.svg"
                          alt="搜索"
                          class="search-icon"
                          data-v-5439243a
                        />
                        <div
                          class="typehead"
                          style="display: none"
                          data-v-5439243a
                        >
                          <div class="title" data-v-5439243a>
                            <span data-v-5439243a>搜索历史</span>
                            <span class="clear" data-v-5439243a>清空</span>
                          </div>
                          <div class="list" data-v-5439243a></div>
                        </div>
                      </form>
                    </li>
                    <li class="nav-item add" data-v-5439243a>
                      <div class="add-group" data-v-5439243a>
                        <button @click="goPostBlog" class="add-btn">
                          写文章
                        </button>

                        <ul class="more-list" data-v-5439243a>
                          <li class="item" data-v-5439243a>发布沸点</li>
                          <!---->
                        </ul>
                      </div>
                      <!---->
                    </li>
                    <li class="nav-item notification" data-v-5439243a>
                      <a class="app-link" data-v-5439243a
                        ><i
                          class="icon ion-android-notifications"
                          data-v-5439243a
                        ></i>
                        <!---->
                      </a>
                    </li>
                    <li class="nav-item menu" data-v-5439243a>
                      <img
                        src="../imgs/logo_z.svg"
                        alt="JavaScript__的头像"
                        class="lazy avatar avatar"
                      />
                      <!---->
                      <ul
                        class="nav-menu user-dropdown-list"
                        style="display: none"
                        data-v-5439243a
                      >
                        <div class="nav-menu-item-group" data-v-5439243a>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a data-v-5439243a
                              ><i class="fengwei fw-write" data-v-5439243a></i>
                              <span data-v-5439243a>写文章</span></a
                            >
                          </li>
                          <!---->
                          <li class="nav-menu-item" data-v-5439243a>
                            <a data-v-5439243a
                              ><i class="fengwei fw-draft" data-v-5439243a></i>
                              <span data-v-5439243a>草稿</span></a
                            >
                          </li>
                        </div>
                        <div class="nav-menu-item-group" data-v-5439243a>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a
                              href="/user/2551284849706189"
                              class="link-icon"
                              data-v-5439243a
                              ><i class="fengwei fw-person" data-v-5439243a></i>
                              <span data-v-5439243a>我的主页</span>
                              <!---->
                            </a>
                          </li>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a
                              href="/user/2551284849706189/likes"
                              data-v-5439243a
                              ><img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik00LjIzNCA2LjY5M3Y3LjI0M0gyLjg4MWMtLjQ4NiAwLS44ODEtLjQ5Mi0uODgxLTEuMDk1VjcuODc1YzAtLjYzLjQxMi0xLjE4Mi44OC0xLjE4MmgxLjM1NHptMy42ODgtMy43QzguMDEgMi40MDQgOC40OSAxLjk5IDkuMDE4IDJjLjc1NC4wMTUgMS4yMDQuNjYzIDEuMzYuOTgzLjI4NC41ODUuMjkyIDEuNTQ5LjA5NyAyLjE2Ny0uMTc3LjU2LS41ODYgMS4yOTYtLjU4NiAxLjI5NmgzLjA2NmMuMzI0IDAgLjYyNS4xNjQuODI2LjQ0OS4yMDQuMjkuMjcuNjY4LjE3OCAxLjAxMWwtMS4zODcgNS4xODNjLS4xMjYuNDk5LS41NDQuODQ3LTEuMDE2Ljg0N0g1LjUzVjYuNjkzYzEuMzg1LS4zMDkgMi4yMzYtMi42MzIgMi4zOTItMy43eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                                class="zan"
                                data-v-5439243a
                              />
                              <span data-v-5439243a>我赞过的</span></a
                            >
                          </li>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a
                              href="/user/2551284849706189/books?type=bought"
                              data-v-5439243a
                              ><i class="fengwei fw-xiaoce" data-v-5439243a></i>
                              <span data-v-5439243a>我的小册</span></a
                            >
                          </li>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a
                              href="/user/2551284849706189/collections"
                              data-v-5439243a
                              ><img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxNnYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGQ9Ik04LjEzNiAxMi40NDZjLS4zNTItLjE5NS0uOTIyLS4xOTUtMS4yNzQgMGwtMi41MzcgMS4zOTdjLS43MDQuMzg2LTEuMTY0LjAzMy0xLjAzLS43ODZMMy43OCAxMC4xYy4wNjctLjQxLS4xMDktLjk3OC0uMzk1LTEuMjdMMS4zMzQgNi43MzZjLS41Ny0uNTgyLS4zOTEtMS4xNS4zOTQtMS4yN2wyLjgzNS0uNDNjLjM5My0uMDYxLjg1NS0uNDEyIDEuMDMtLjc4NmwxLjI2OC0yLjY5MWMuMzUzLS43NDYuOTI0LS43NDQgMS4yNzUgMGwxLjI3IDIuNjkxYy4xNzUuMzc0LjYzNy43MjYgMS4wMzEuNzg1bDIuODM2LjQzMmMuNzg2LjExOS45NjIuNjkuMzkzIDEuMjdMMTEuNjE0IDguODNjLS4yODUuMjkyLS40NjIuODYtLjM5NSAxLjI3bC40ODUgMi45NTdjLjEzNS44MjItLjMyOSAxLjE3Mi0xLjAzLjc4NmwtMi41MzgtMS4zOTd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                                class="collect"
                                data-v-5439243a
                              />
                              <span data-v-5439243a>我的收藏集</span></a
                            >
                          </li>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a href="/subscribe" data-v-5439243a
                              ><i class="fengwei fw-tag" data-v-5439243a></i>
                              <span data-v-5439243a>标签管理</span></a
                            >
                          </li>
                        </div>
                        <div class="nav-menu-item-group" data-v-5439243a>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a href="/academy" data-v-5439243a
                              ><img
                                src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/academyIcon.64eed9c.png"
                                class="fengwei"
                                data-v-5439243a
                              />
                              <span data-v-5439243a>字学</span></a
                            >
                          </li>
                        </div>
                        <div class="nav-menu-item-group" data-v-5439243a>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a href="/user/settings" data-v-5439243a
                              ><i
                                class="fengwei fw-setting"
                                data-v-5439243a
                              ></i>
                              <span data-v-5439243a>设置</span></a
                            >
                          </li>
                          <li class="nav-menu-item more" data-v-5439243a>
                            <a data-v-5439243a
                              ><i class="fengwei fw-info" data-v-5439243a></i>
                              <span data-v-5439243a>关于</span>
                              <i
                                class="ion-chevron-right more-icon"
                                data-v-5439243a
                              ></i
                            ></a>
                            
                          </li>
                        </div>
                        <div class="nav-menu-item-group" data-v-5439243a>
                          <li class="nav-menu-item" data-v-5439243a>
                            <a data-v-5439243a
                              ><i class="fengwei fw-logout" data-v-5439243a></i>
                              <span data-v-5439243a>登出</span></a
                            >
                          </li>
                        </div>
                      </ul>
                    </li>
                    <!---->
                  </ul>
                </nav>
              </div>
            </header>
          </div>
          <main
            class="container main-container with-view-nav"
            style="max-width: "
            data-v-6a3e47cf
          >
            <div
              class="view timeline-index-view"
              data-v-6a3e47cf
              data-v-48554d55
            >
              <nav
                role="navigation"
                class="view-nav"
                data-v-f573cf64
                data-v-48554d55
              >
                <div class="nav-list left" data-v-f573cf64>
                  <a
                    href="/recommended"
                    class="nav-item active"
                    data-v-f573cf64
                  >
                    <div
                      st:block="categoryPopover"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                      功能
                    </div> </a
                  ><a href="/following" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                      功能
                    </div> </a
                  ><a href="/backend" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      st:state="6809637769959178254"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                      功能
                    </div> </a
                  ><a href="/frontend" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      st:state="6809637767543259144"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                    功能
                    </div> </a
                  ><a href="/android" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      st:state="6809635626879549454"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                      功能
                    </div> </a
                  ><a href="/ios" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      st:state="6809635626661445640"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                       功能
                    </div> </a
                  ><a href="/ai" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      st:state="6809637773935378440"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                   功能
                    </div> </a
                  ><a href="/freebie" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      st:state="6809637771511070734"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                      功能
                    </div> </a
                  ><a href="/career" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      st:state="6809637776263217160"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                       功能
                    </div> </a
                  ><a href="/article" class="nav-item" data-v-f573cf64>
                    <div
                      st:block="categoryPopover"
                      st:state="6809637772874219534"
                      class="category-popover-box"
                      data-v-9786f6f8
                      data-v-f573cf64
                    >
                      <!---->
                     功能
                    </div>
                  </a>
                  <a
                    href="/subscribe/subscribed"
                    class="nav-item right"
                    data-v-f573cf64
                  >
                    功能
                  </a>
                </div>
              </nav>
              <div class="timeline-container" data-v-6a3e47cf data-v-48554d55>
                <nav
                  role="navigation"
                  class="tag-nav tag-navigator"
                  data-v-4f70b060
                  data-v-48554d55
                >
                  <ul class="nav-list tag-list" data-v-4f70b060>
                    <!---->
                  </ul>
                </nav>
                <div class="timeline-content" data-v-6a3e47cf data-v-48554d55>
                  <div
                    class="timeline-entry-list"
                    data-v-6a3e47cf
                    data-v-48554d55
                  >
                    <div
                      class="entry-list-container"
                      data-v-42d1c148
                      data-v-48554d55
                    >
                      <header
                        class="list-header"
                        style="display: "
                        data-v-42d1c148
                      >
                        <nav role="navigation" class="list-nav" data-v-42d1c148>
                          <ul class="nav-list left" data-v-42d1c148>
                            <li class="nav-item active" data-v-42d1c148>
                              <a href="/?sort=popular">功能</a>
                            </li>
                            <li class="nav-item" >
                              <a href="/?sort=newest">功能</a>
                            </li>
                            <li class="nav-item">
                              <a
                                href="/?sort=three_days_hottest"
                                data-v-42d1c148
                                >热榜</a
                              >
                            </li>
                          </ul>
                          <div class="dorp-down-area" data-v-42d1c148>
                            <!---->
                          </div>
                        </nav>
                      </header>

                      <div class="container">
                        <div class="blog-list">
                          <div
                            class="blog"
                            v-for="item in blogList"
                            :key="item.blog_id"
                          >
                          <h5>{{item.username}}</h5>
                           <h1><router-link
                                :to="{ path: '/blog/detail/' + item.blog_id }"
                                >{{ item.title }}</router-link
                              ></h1>
                            <h3 class="blog-title">
                              
                            </h3>
                            <!-- <p class="blog-content"><br>{{ item.content }}</p> -->
                            <span class="post-time">{{ item.postTime }}</span>
                            <span></span>
                            <hr>
                          </div>
                        </div>
                      </div>
                      <!-- <div
                        class="entry-list-wrap"
                        data-v-7e037fb6
                        data-v-42d1c148
                      >
                        <div
                          class="loading-empty"
                          data-v-7e037fb6
                          data-v-42d1c148
                        >
                          <div
                            class="activity-empty shadow"
                            data-v-8739e5ce
                            data-v-42d1c148
                          >
                            <svg
                              width="66"
                              height="68"
                              viewBox="0 0 66 68"
                              class="icon empty-icon"
                              data-v-8739e5ce
                            >
                              <g
                                fill="none"
                                fill-rule="evenodd"
                                transform="translate(4 3)"
                                data-v-8739e5ce
                              >
                                <g fill="#F7F7F7" data-v-8739e5ce>
                                  <path
                                    d="M9 10h23.751v3.221H9zM9 16.494h41.083v4.026H9zM9 26.104h23.751v3.221H9zM9 42.208h23.751v3.221H9zM9 33.351h41.083v4.026H9zM9 49.455h41.083v4.026H9z"
                                    data-v-8739e5ce
                                  ></path>
                                </g>
                                <rect
                                  width="56"
                                  height="60"
                                  x="1.139"
                                  y="1.338"
                                  stroke="#EBEBEB"
                                  stroke-width="2"
                                  rx="6"
                                  data-v-8739e5ce
                                ></rect>
                              </g>
                            </svg>
                            <span class="empty-text" data-v-8739e5ce
                              >暂无数据，快来该分类下写文章 ~</span>
                          </div>
                        </div>
                      </div> -->
                    </div>
                  </div>
                  <aside
                    st:block="sidebar"
                    class="index-aside aside"
                    data-v-b6ac35fe
                    data-v-48554d55
                  >
                    <!---->
                    <!---->
                    <div class="sidebar-block sticky-block" data-v-b6ac35fe>
                      <!---->
                    </div>
                    <!---->
                    <div class="sidebar-block link-block" data-v-b6ac35fe>
                      <ul class="link-list" data-v-b6ac35fe>
                        <li class="item" data-v-b6ac35fe>
                          <a class="link" data-v-b6ac35fe
                            ><img
                              src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-tutu.d58819c.png"
                              class="icon"
                              data-v-b6ac35fe
                            />
                            <span class="title" data-v-b6ac35fe
                              >前往瀚文的万事屋</span
                            ></a
                          >
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <a class="link" data-v-b6ac35fe
                            ><img
                              src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
                              class="icon"
                              data-v-b6ac35fe
                            />
                            <span class="title" data-v-b6ac35fe
                              >前往瀚文的万事屋</span
                            ></a
                          >
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <a class="link" data-v-b6ac35fe
                            ><img
                              src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-miner.b78347c.png"
                              class="icon"
                              data-v-b6ac35fe
                            />
                            <span class="title" data-v-b6ac35fe
                              >前往瀚文的万事屋</span
                            ></a
                          >
                        </li>
                      </ul>
                    </div>
                    <div
                      st:block="more"
                      class="sidebar-block more-block"
                      data-v-b6ac35fe
                    >
                      <ul class="more-list" data-v-b6ac35fe>
                        <li class="item" data-v-b6ac35fe>
                          <a st:name="aboutLink" data-v-b6ac35fe>关于</a>
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <a
                            href="/license"
                            target="_blank"
                            rel=""
                            st:name="businessLicense"
                            data-v-b6ac35fe
                          >
                            营业执照
                          </a>
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <a st:name="linksLink" data-v-b6ac35fe>友情链接</a>
                        </li>
                      </ul>
                      <ul class="more-list" data-v-b6ac35fe>
                        <li class="item" data-v-b6ac35fe>
                          <a st:name="termsLink" data-v-b6ac35fe>用户协议</a>
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <a st:name="privacyLink" data-v-b6ac35fe>隐私政策</a>
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <a st:name="guideLink" data-v-b6ac35fe> 使用指南 </a>
                        </li>
                      </ul>
                      <ul class="more-list" data-v-b6ac35fe>
                        <li class="item" data-v-b6ac35fe>
                          <a st:name="beianLink" data-v-b6ac35fe>
                            京ICP备18012699号-3
                          </a>
                        </li>
                      </ul>
                      <ul class="more-list" data-v-b6ac35fe>
                        <li class="item" data-v-b6ac35fe>
                          <a st:name="beianLink" data-v-b6ac35fe>
                            京公网安备11010802026719号
                          </a>
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <span data-v-b6ac35fe
                            >版权所有</span
                          >
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <span data-v-b6ac35fe
                            >公司地址</span
                          >
                        </li>
                        <li class="item" data-v-b6ac35fe>
                          <span data-v-b6ac35fe>公司座机</span>
                        </li>
                      </ul>
                      <ul class="more-list" data-v-b6ac35fe>
                        <li class="item" data-v-b6ac35fe>
                          <a data-v-b6ac35fe>©2021 瀚文的万事屋</a>
                        </li>
                      </ul>
                      <ul class="more-list account-list" data-v-b6ac35fe>
                        <li
                          st:name="weiboBtn"
                          class="item weibo"
                          data-v-b6ac35fe
                        >
                          <a data-v-b6ac35fe
                            ><img
                              src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/weibo.0cd39f5.png"
                              alt="微博"
                              class="icon"
                              data-v-b6ac35fe
                          /></a>
                        </li>
                        <li
                          st:name="wechatBtn"
                          class="item wechat"
                          data-v-b6ac35fe
                        >
                          <img
                            src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/wechat.ce329e6.png"
                            alt="微信"
                            class="icon"
                            data-v-b6ac35fe
                          />
                          <div class="qr-panel" data-v-b6ac35fe>
                            <div class="title" data-v-b6ac35fe>微信扫一扫</div>
                            <img
                              src="//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/juejin-qr.b247fde.jpeg"
                              class="qr"
                              data-v-b6ac35fe
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </main>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      console.log(999);
      this.$http.get("/blog/list").then((res) => {
        let { state, blogs } = res.data;
        if (state == "auth-fail") {
          alert("请求未授权-then!");
        } else if (state == "success") {
          this.blogList = blogs;
        }
      });
    },
    goPostBlog() {
      this.$router.push("/blog/post");
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}

template {
  display: none;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:active,
a:hover {
  outline-width: 0;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
button,
input,
select,
textarea {
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
@font-face {
  font-family: "iconfont";
  src: url(https://b-gold-cdn.xitu.io/fonts/iconfont.eot?t=1470110358);
  src: url(https://b-gold-cdn.xitu.io/fonts/iconfont.eot?t=1470110358#iefix)
      format("embedded-opentype"),
    url(https://b-gold-cdn.xitu.io/fonts/iconfont.woff?t=1470110358)
      format("woff"),
    url(https://b-gold-cdn.xitu.io/fonts/iconfont.ttf?t=1470110358)
      format("truetype"),
    url(https://b-gold-cdn.xitu.io/fonts/iconfont.svg?t=1470110358#iconfont)
      format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-xlcollection:before {
  content: "\e600";
}
.icon-xlchatbox:before {
  content: "\e601";
}
.markdown-body embed,
.markdown-body iframe,
.markdown-body img:not(.equation),
.markdown-body video {
  max-width: 100% !important;
  margin: 0;
}
.markdown-body li {
  list-style: disc outside none;
  list-style: initial;
}
.markdown-body img.lazyload {
  visibility: hidden;
}
.markdown-body img.inited {
  background-color: #f8f9fa;
  background-position: 50%;
  background-repeat: no-repeat;
  visibility: visible;
}
.markdown-body img.loaded {
  background-image: none;
  background-color: transparent;
}
.markdown-body img.error {
  background-image: url(//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/image-error.3338abe.png);
}
.markdown-body img.equation {
  margin: 0 0.1em;
  max-width: 100% !important;
  vertical-align: middle;
}
.markdown-body img:not(.equation) {
  cursor: zoom-in;
}
.markdown-body blockquote.warning {
  position: relative;
  border-left-color: #f75151;
  margin-left: 8px;
}
.markdown-body blockquote.warning:before {
  position: absolute;
  top: 14px;
  left: -12px;
  background: #f75151;
  border-radius: 50%;
  content: "!";
  width: 20px;
  height: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.markdown-body pre {
  position: relative;
}
.markdown-body pre > code.hljs[lang]:before {
  content: attr(lang);
  position: absolute;
  right: 15px;
  top: 2px;
  color: hsla(0, 0%, 54.9%, 0.8);
}
.markdown-body pre > code.hljs[lang][lang="bash"]:before {
  content: "";
}
.markdown-body pre > code.copyable .copy-code-btn {
  position: absolute;
  top: 6px;
  right: 15px;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  color: hsla(0, 0%, 54.9%, 0.8);
  transition: color 0.1s;
}
.markdown-body pre > code.copyable .copy-code-btn:hover {
  color: #8c8c8c;
}
.markdown-body pre > code.copyable.hljs[lang]:before {
  right: 70px;
}
.markdown-body pre pre > code .copy-code-btn {
  display: none;
}
.markdown-body pre pre > code.hljs[lang]:before {
  top: 2px;
  right: 15px;
}
@media (max-width: 720px) {
  .markdown-body pre > code.copyable.hljs[lang]:before {
    right: 1rem;
  }
}
#nprogress {
  pointer-events: none;
}
#nprogress .bar {
  background: #007fff;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #007fff, 0 0 5px #007fff;
  opacity: 1;
  transform: rotate(3deg) translateY(-4px);
}
.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}
.nprogress-custom-parent #nprogress .bar,
.nprogress-custom-parent #nprogress .spinner {
  position: absolute;
}
@-webkit-keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
body {
  font-size: 12px;
  line-height: normal;
}
a,
button,
input {
  margin: initial;
}
img {
  width: auto;
  height: auto;
}
#juejin {
  overflow-x: visible;
  overflow-x: initial;
}
html {
  font-size: 12px;
  font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial;
  word-break: break-word;
  text-rendering: optimizeLegibility;
  color: #333;
  background-color: #f4f5f5;
}
html.white {
  background-color: #fff;
}
body {
  word-break: break-word;
  overflow-y: scroll;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}
a:hover {
  color: #007fff;
}
button {
  list-style: 1;
}
button:disabled {
  cursor: not-allowed;
}
button.disabled,
button.disabled:hover {
  background-color: #d2d2d2;
  cursor: not-allowed;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
#juejin-seo-meta {
  display: none;
}
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
.container:after {
  display: table;
  content: "";
  clear: both;
}
.hidden {
  display: none;
}
.root-view-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
}
.shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
.align-middle {
  vertical-align: middle;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
.text-normal {
  color: #333;
}
.text-muted {
  color: #666;
}
.text-muted1 {
  color: #909090;
}
.text-muted2 {
  color: #838383;
}
.text-gray {
  color: #909090;
}
.text-light {
  color: #d2d2d2;
}
.text-blue {
  color: #007fff;
}
.text-blue-hover {
  color: #0371df;
}
.text-green {
  color: #37c700;
}
.text-green-hover {
  color: #3cb40e;
}
.text-orange {
  color: #ff8900;
}
.text-red {
  color: #e22323;
}
.text-a,
.text-link {
  cursor: pointer;
  color: #333;
}

.text-a:active,
.text-a:hover,
.text-link:active,
.text-link:hover {
  color: #275b8c;
}
.text-link {
  color: #259;
}
.text-pointer {
  cursor: pointer;
}
.line-wrap {
  white-space: pre-wrap;
  word-break: break-all;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-bold,
b,
strong {
  font-weight: 700;
}
.view-nav {
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  transform: translateZ(0);
}
.view-nav,
.view-nav:before {
  left: 0;
  background-color: #fff;
}
.view-nav:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  height: 200%;
  z-index: -1;
}
.view-nav.top {
  transform: translate3d(0, -5rem, 0);
}
.view-nav .nav-list {
  max-width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  line-height: 1;
}
.view-nav .nav-list .nav-item {
  height: 100%;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  font-size: 1.16rem;
  color: #71777c;
  padding: 0 1rem;
}
.view-nav .nav-list .nav-item:first-child {
  padding: 0 1rem 0 0;
}
.view-nav .nav-list .nav-item:last-child {
  padding: 0 0 0 1rem;
}
.view-nav .nav-list .nav-item.active,
.view-nav .nav-list .nav-item:hover {
  color: #007fff;
}
.view-nav .nav-list .nav-item a {
  color: inherit;
}
.nav-item {
  position: relative;
  cursor: pointer;
}
.nav-item > a:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
@media (max-width: 980px) {
  .view-nav .nav-list {
    width: auto;
    overflow-x: auto;
  }
  .view-nav .nav-list .nav-item:first-child,
  .view-nav .nav-list .nav-item:last-child {
    padding: 0 1.5rem;
  }
}
.list-header {
  padding: 1.3rem 1rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.list-header .list-nav,
.list-header .nav-list {
  display: flex;
  justify-content: space-between;
}
.list-header .nav-list {
  align-items: center;
  line-height: 1;
}
.list-header .nav-list .nav-item.active a,
.list-header .nav-list .nav-item a:hover {
  color: #007fff;
}
.list-header .left .nav-item {
  padding: 0 1.2rem;
  font-size: 1.16rem;
  border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
}
.list-header .left .nav-item:last-child {
  border: none;
}
.list-header .right .nav-item {
  font-size: 1.16rem;
  padding: 0 0.7rem;
  position: relative;
}
.list-header .right .nav-item:not(:last-child):after {
  width: 2px;
  height: 2px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  background-color: #2b445d;
  transform: translateY(-50%);
  opacity: 0.5;
}
@media (max-width: 600px) {
  .list-header .right {
    display: none;
  }
}
.button,
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #007fff;
  color: #fff;
  border-radius: 2px;
  border: none;
  padding: 0.5rem 1.3rem;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
}
.button:hover,
button:hover {
  background-color: #0371df;
  color: #fff;
}
i + span {
  margin-left: 0.6rem;
}
button + button {
  margin-left: 0.8rem;
}
.subscribe-btn {
  border: 1px solid #37c700;
  background-color: #fff;
  color: #37c700;
  margin: 1rem auto;
  font-size: 1.1rem;
}
.subscribe-btn:hover {
  background-color: #fff;
  color: #3cb40e;
  border-color: #3cb40e;
}
.subscribe-btn.subscribed {
  background-color: #37c700;
  color: #fff;
}
.subscribe-btn.subscribed:hover {
  background-color: #3cb40e;
}
.radio-group {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.radio-group .radio-label {
  margin-left: 6px;
}
input[type="radio"] {
  width: 16px;
  height: 16px;
  border: 1px solid #bfcbd9;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="radio"]:after {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6);
}
input[type="radio"]:checked {
  border-color: #20a0ff;
  background: #3a9afc;
}
input[type="radio"]:checked:after {
  transform: translate(-50%, -50%) scale(1);
}
input[type="radio"]:disabled {
  background-color: #eef1f6;
  border-color: #d1dbe5;
  cursor: not-allowed;
}
input[type="radio"]:disabled:checked {
  border-color: #d1dbe5;
  background-color: #d1dbe5;
}
input[name="registerSmsCode"]::-webkit-contacts-auto-fill-button {
  display: none;
  visibility: hidden;
}
.editable,
input[type="password"],
input[type="text"],
input[type="url"],
textarea {
  resize: none;
  outline: none;
  width: 100%;
  display: block;
  box-shadow: none;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: border 0.3s;
  background-color: #fff;
  box-sizing: border-box;
}
.aside-top-section {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}
.aside-top-section .aside-header {
  padding: 1rem 1.3rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  color: #333;
  font-size: 1.16rem;
}
.aside-top-section .aside-list {
  padding: 1rem 1.3rem;
}
.aside-top-section .aside-list .item {
  margin-bottom: 1.5rem;
}
.busy-icon:before {
  -webkit-animation: busy-ani 1s linear infinite;
  animation: busy-ani 1s linear infinite;
}
@-webkit-keyframes busy-ani {
  to {
    transform: rotate(1turn);
  }
}
@keyframes busy-ani {
  to {
    transform: rotate(1turn);
  }
}
.request-health-alert[data-v-ded0787a] {
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  padding: 1rem;
  max-width: 50%;
  color: #e33;
  background-color: #f6e3e3;
  border: 1px solid #e99;
  z-index: 10000;
}
@media (max-width: 600px) {
  .request-health-alert[data-v-ded0787a] {
    display: none;
  }
}
.title[data-v-ded0787a] {
  margin: 0 0 0.4em;
  font-size: 1.5em;
}
.content[data-v-ded0787a] {
  line-height: 1.5;
}
.btn[data-v-ded0787a] {
  color: inherit;
  text-decoration: underline;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.close[data-v-ded0787a] {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;
  opacity: 0.5;
}
.close[data-v-ded0787a]:hover {
  opacity: 1;
}
.emoji-barrage .full-screen[data-v-68506677] {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  overflow: hidden;
}
.emoji-inner-screen[data-v-68506677] {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(-100%, -100%, 0);
}
.emoji-inner-screen .template[data-v-68506677] {
  position: relative;
  width: 100%;
  height: 100%;
}
.emojin-inner-screen__0.animate[data-v-68506677] {
  -webkit-animation: left-data-v-68506677 6s ease-in;
  animation: left-data-v-68506677 6s ease-in;
}
.emojin-inner-screen__1.animate[data-v-68506677] {
  -webkit-animation: 6s ease-in normal-data-v-68506677;
  animation: 6s ease-in normal-data-v-68506677;
}
.emojin-inner-screen__2.animate[data-v-68506677] {
  -webkit-animation: right-data-v-68506677 6s ease-in;
  animation: right-data-v-68506677 6s ease-in;
}
@-webkit-keyframes left-data-v-68506677 {
  0% {
    transform: translate3d(-50%, -100%, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes left-data-v-68506677 {
  0% {
    transform: translate3d(-50%, -100%, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
}
@-webkit-keyframes normal-data-v-68506677 {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes normal-data-v-68506677 {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
}
@-webkit-keyframes right-data-v-68506677 {
  0% {
    transform: translate3d(50%, -100%, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes right-data-v-68506677 {
  0% {
    transform: translate3d(50%, -100%, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
  }
}
.modal-mask[data-v-2fba547a] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 501;
}
.bind-phone-number-form[data-v-2fba547a] {
  position: fixed;
  padding: 1.83rem 2.08rem;
  width: 26.5rem;
  max-width: 100%;
  font-size: 1.167rem;
  background-color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  z-index: 501;
  transform: translate(-50%, -60%);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
}
.close-btn[data-v-2fba547a] {
  float: right;
  cursor: pointer;
  opacity: 0.4;
}
.close-btn[data-v-2fba547a]:hover {
  opacity: 1;
}
.title[data-v-2fba547a] {
  font-size: 1.42rem;
  color: #000;
  font-weight: 600;
  margin: 0 0 1rem;
}
.hint[data-v-2fba547a] {
  font-size: 1.25rem;
  line-height: 1.6;
  font-weight: 400;
  color: #000;
  margin-bottom: 2rem;
}
.hint > a[data-v-2fba547a] {
  color: #007fff;
}
.input-group[data-v-2fba547a] {
  margin-bottom: 1.5rem;
}
.input-box[data-v-2fba547a] {
  position: relative;
  margin-bottom: 0.8rem;
}
.dropdown-box[data-v-2fba547a] {
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  display: flex;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
}
.dropdown-box .input[data-v-2fba547a] {
  border: none;
}
.dropdown-box.focus[data-v-2fba547a] {
  border-color: #007fff;
}
.input[data-v-2fba547a] {
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  padding: 0.67rem 0.67rem 0.67rem 4px;
}
.input[data-v-2fba547a]:focus {
  border-color: #007fff;
}
.number-input[data-v-2fba547a] {
  width: 74%;
}
.btn[data-v-2fba547a] {
  width: 100%;
  height: 2.92rem;
  color: #fff;
  background-color: #007fff;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
}
.btn[data-v-2fba547a]:disabled {
  background-color: #909090;
  cursor: default;
}
.vcode-box[data-v-2fba547a] {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vcode-box .input[data-v-2fba547a] {
  width: auto;
  flex-grow: 1;
  overflow: hidden;
}
.vcode-box .img-vcode[data-v-2fba547a] {
  border: 1px solid #ddd;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 0;
  width: 160px;
  color: #333;
  height: 40px;
  margin-left: 15px;
  flex-shrink: 0;
}
.vcode-box .img-vcode img[data-v-2fba547a] {
  max-height: 46px;
}
.vcode-box .img-vcode .hint[data-v-2fba547a] {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.send-vcode-btn[data-v-2fba547a] {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  color: #007fff;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
}
.send-vcode-btn[data-v-2fba547a]:disabled {
  color: #909090;
  cursor: default;
}
.send-vcode-btn[data-v-2fba547a]:hover(:not(:disabled)) {
  opacity: 0.8;
}
.masker-fade-enter-active[data-v-2fba547a],
.masker-fade-leave-active[data-v-2fba547a] {
  transition: opacity 0.3s;
}
.masker-fade-enter[data-v-2fba547a],
.masker-fade-leave-to[data-v-2fba547a] {
  opacity: 0;
}
.form-fade-enter-active[data-v-2fba547a],
.form-fade-leave-active[data-v-2fba547a] {
  transition: 0.3s;
}
.form-fade-enter[data-v-2fba547a],
.form-fade-leave-to[data-v-2fba547a] {
  transform: translate(-50%, -52%);
  opacity: 0;
}
.dropdown-input-container[data-v-02053067] {
  height: 100%;
  display: flex;
}
.dropdown-input-container input[data-v-02053067] {
  border: none;
  outline: none;
  width: 32px;
  margin: 0;
  padding: 0;
}
.dropdown-input-container .dropdown-input-box[data-v-02053067]:before {
  content: "+";
}
.dropdown-input-container .arrow[data-v-02053067] {
  cursor: pointer;
  transition: all 0.45s cubic-bezier(0.8, 0.15, 0.15, 0.86);
}
.dropdown-input-container .dropdown-pannel[data-v-02053067] {
  position: absolute;
  width: 220px;
  max-height: 188px;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #e8e8e8;
  background-color: #fff;
  overflow-y: auto;
  z-index: 200;
  top: 40px;
  left: -2px;
}
.dropdown-input-container li.item[data-v-02053067] {
  padding: 8px 10px;
  font-size: 14px;
  line-height: 20px;
  justify-content: space-between;
  display: flex;
}
.dropdown-input-container li.item[data-v-02053067]:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}
.dropdown-input-container li.item.selected[data-v-02053067] {
  color: #007fff;
}
.dropdown-input-container li > span[data-v-02053067]:last-child {
  color: #999;
}
.timeline-index-view.v2 .list-header[data-v-48554d55] {
  padding-left: 1.3rem;
  padding-right: 1.3rem;
}
.aside[data-v-48554d55] {
  position: absolute;
  top: 0;
  right: 0;
}
.nav-list[data-v-48554d55] {
  position: relative;
}
.nav-list .nav-item.right[data-v-48554d55] {
  position: absolute;
  top: 0;
  right: 0;
}
.notification[data-v-48554d55]:before {
  content: "\25CF";
  color: #007fff;
  font-size: 1rem;
  left: 6.25rem;
  position: absolute;
  top: 4px;
  transform: scale(0.5);
}
.user-action-nav[data-v-48554d55] {
  margin-right: 21.667rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.timeline-container[data-v-48554d55] {
  margin-top: 0;
}
.timeline-content[data-v-48554d55] {
  position: relative;
  margin-top: 0.33rem;
}
@media (max-width: 600px) {
  .timeline-content[data-v-48554d55] {
    margin-top: 0.5rem;
  }
}
.timeline-entry-list[data-v-48554d55] {
  margin-right: 21.667rem;
  border-radius: 2px;
  width: 700px;
}
.timeline-entry-list .entry-list[data-v-48554d55] {
  background-color: #fff;
}
@media (max-width: 960px) {
  .nav-item.right[data-v-48554d55] {
    display: none;
  }
  .timeline-entry-list[data-v-48554d55] {
    width: 100%;
  }
}
.container .view.timeline-index-view[data-v-48554d55] {
  margin-top: 5.17rem;
}
.fade-enter-active[data-v-48554d55] {
  transition: opacity 0.1s;
}
.fade-leave-active[data-v-48554d55] {
  transition: opacity 0.5s;
}
.fade-enter[data-v-48554d55],
.fade-leave-to[data-v-48554d55] {
  opacity: 0;
}
.main-header-box[data-v-6a3e47cf] {
  position: relative;
  height: 5rem;
}
.main-header[data-v-6a3e47cf] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
  transform: translate3d(0, -100%, 0);
}
.main-header.visible[data-v-6a3e47cf] {
  transform: translateZ(0);
}
.main-container > .view[data-v-6a3e47cf] {
  margin-top: 1.767rem;
}
.main-container.with-view-nav > .view[data-v-6a3e47cf] {
  margin-top: 4.67rem;
}
.main-container.tight > .view[data-v-6a3e47cf] {
  margin-top: 0;
}
.main-container.tight.with-view-nav > .view[data-v-6a3e47cf] {
  margin-top: 3.833rem;
}
@font-face {
  font-family: "iconfont";
  src: url(https://b-gold-cdn.xitu.io/fonts/iconfont.eot?t=1470110358);
  src: url(https://b-gold-cdn.xitu.io/fonts/iconfont.eot?t=1470110358#iefix)
      format("embedded-opentype"),
    url(https://b-gold-cdn.xitu.io/fonts/iconfont.woff?t=1470110358)
      format("woff"),
    url(https://b-gold-cdn.xitu.io/fonts/iconfont.ttf?t=1470110358)
      format("truetype"),
    url(https://b-gold-cdn.xitu.io/fonts/iconfont.svg?t=1470110358#iconfont)
      format("svg");
}
.iconfont[data-v-5439243a] {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-xlcollection[data-v-5439243a]:before {
  content: "\e600";
}
.icon-xlchatbox[data-v-5439243a]:before {
  content: "\e601";
}
.logo[data-v-5439243a] {
  min-width: 98px;
  margin-right: 2rem;
}
.nav-item a[data-v-5439243a] {
  color: #71777c;
}
.nav-item.active > .icon[data-v-5439243a],
.nav-item.active > a[data-v-5439243a] {
  color: #007fff;
}
.nav-item.discount[data-v-5439243a]:after {
  content: "";
  position: absolute;
  width: 35px;
  height: 28px;
  background: url(//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/half_discount.3daad5d.gif);
  background-size: 35px 28px;
  right: -14px;
  top: 10px;
}
.nav-menu-item > a[data-v-5439243a] {
  display: block;
  color: #71777c;
}
.avatar[data-v-5439243a] {
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
}
.avatar[data-v-5439243a],
.badge[data-v-5439243a] {
  border-radius: 50%;
}
.badge[data-v-5439243a] {
  position: absolute;
  top: 10px;
  right: -5px;
  width: 11px;
  height: 11px;
  background-color: #2f74e9;
}
.main-header[data-v-5439243a] {
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 5rem;
  z-index: 250;
}
.main-header .container[data-v-5439243a] {
  max-width: 960px;
  margin: auto;
}
.container[data-v-5439243a] {
  display: flex;
  align-items: center;
  height: 100%;
}
.main-nav[data-v-5439243a] {
  height: 100%;
  flex: 1 0 auto;
}
.main-nav-list[data-v-5439243a] {
  display: flex;
}
.phone-show-menu[data-v-5439243a] {
  cursor: pointer;
  display: none;
}
.phone-hide[data-v-5439243a] {
  display: flex;
}
.nav-list[data-v-5439243a] {
  justify-content: flex-end;
  position: relative;
}
.nav-item[data-v-5439243a],
.nav-list[data-v-5439243a] {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
}
.nav-item[data-v-5439243a] {
  color: #71777c;
  padding: 0 1.2rem;
  font-size: 1.33rem;
  justify-content: center;
  cursor: pointer;
}
.nav-item.activities .tip[data-v-5439243a] {
  z-index: 2;
  cursor: auto;
  width: 17rem;
  background: #fff;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 4.5rem;
  left: -50%;
  margin-left: -3.7rem;
  color: #17181a;
  font-size: 15px;
  border-radius: 2px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.12);
}
.nav-item.activities .tip .panfish[data-v-5439243a] {
  height: 63px;
  width: 57px;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  background-size: contain;
}
.nav-item.activities .tip .content[data-v-5439243a] {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0 0.5rem;
  color: #17181a;
}
.nav-item.activities .tip .content button[data-v-5439243a] {
  padding: 0;
  width: 6.41rem;
  height: 2rem;
  color: #fff;
  font-size: 13px;
  border-radius: 12px;
  margin-top: 0.5rem;
}
.nav-item.activities .tip .triangle[data-v-5439243a] {
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  width: 1rem;
  height: 1rem;
  transform: translate(-50%, -50%) rotate(45deg);
  background: #fff;
  border-top: 1px solid #f4f5f5;
  border-left: 1px solid #f4f5f5;
}
.nav-item.activities .tip .close[data-v-5439243a] {
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 50%;
  background: #fff;
  transform: rotate(45deg);
}
.nav-item.activities .tip .close[data-v-5439243a]:after,
.nav-item.activities .tip .close[data-v-5439243a]:before {
  content: "";
  width: 0.8rem;
  height: 2px;
  display: block;
  position: absolute;
  background: #c5c5c5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.nav-item.activities .tip .close[data-v-5439243a]:after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.nav-item.activities .tip .close[data-v-5439243a]:hover {
  opacity: 0.8;
}
.nav-item .login-button[data-v-5439243a] {
  border: 1px solid #007fff;
  background-color: #fff;
  padding: 0.3rem 1.6rem;
  color: #007fff;
  line-height: 1.9rem;
}
.nav-item:hover > a[data-v-5439243a] {
  color: #007fff;
}
.nav-item[data-v-5439243a]:last-child {
  padding-right: 0;
}
.nav-item.link-item[data-v-5439243a] {
  padding: 0 1.5rem;
  height: 5rem;
}
.nav-item.book.new-year a[data-v-5439243a]:after {
  left: 0;
  top: 0;
  position: absolute;
  content: "";
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 60px auto;
  width: 100%;
  height: 100%;
}
.nav-item a.activity-entry[data-v-5439243a] {
  display: inline-block;
  width: 132px;
  height: 18px;
  background-image: url(//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/2020.933bf44.svg);
  background-repeat: no-repeat;
  background-size: contain;
}
.nav-item a.activity-entry-mobile[data-v-5439243a] {
  display: none;
  color: #e6b644;
}
.nav-item.search[data-v-5439243a] {
  flex: 1 1 auto;
  justify-content: flex-end;
  cursor: auto;
}
.nav-item.add[data-v-5439243a] {
  cursor: default;
}
.nav-item.notification:hover .icon[data-v-5439243a] {
  color: #007fff;
}
.nav-item.menu[data-v-5439243a],
.nav-item.submit[data-v-5439243a] {
  position: relative;
}
.nav-item.submit[data-v-5439243a] {
  color: #007fff;
}
.nav-item.submit[data-v-5439243a]:hover {
  color: #0371df;
}
.nav-item.submit[data-v-5439243a]:after {
  content: "|";
  position: absolute;
  top: 20px;
  left: 100%;
  color: hsla(0, 0%, 59.2%, 0.4);
}
.nav-item.submit .submit-panel[data-v-5439243a] {
  position: absolute;
  top: 101%;
  left: -123px;
  width: 326px;
  box-sizing: border-box;
  padding: 2.5rem 2rem;
  border-radius: 2px;
  color: #909090;
  font-size: 1.1rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(178, 181, 187, 0.5);
  cursor: default;
  z-index: 11;
}
.nav-item.submit .submit-panel[data-v-5439243a]:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 1rem;
  height: 1rem;
  border-top: 1px solid rgba(178, 181, 187, 0.5);
  border-left: 1px solid rgba(178, 181, 187, 0.5);
  background-color: #fff;
  transform: rotate(45deg) translate(-50%, -50%);
  transform-origin: 0 0;
}
.nav-item.submit .submit-panel .title[data-v-5439243a] {
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 2rem;
}
.nav-item.submit .submit-panel .benefit-list[data-v-5439243a] {
  margin-left: 2rem;
}
.nav-item.submit .submit-panel .item[data-v-5439243a] {
  list-style: disc outside none;
  list-style: initial;
  margin-bottom: 1rem;
}
.nav-item.submit .submit-panel .link[data-v-5439243a] {
  color: #6cbd45;
  text-decoration: underline;
}
.nav-item.submit .submit-panel button[data-v-5439243a] {
  display: block;
  margin: 2rem auto 0;
  background-color: #83c73a;
  font-size: 1.2rem;
  padding: 1rem 4rem;
}
.nav-item.auth[data-v-5439243a] {
  color: #007fff;
  padding: 0;
}
.nav-item.auth span[data-v-5439243a]:hover {
  color: #0371df;
}
.nav-item.auth .login[data-v-5439243a]:after {
  content: "·";
  margin: 0 0.4rem;
}
.nav-item .icon[data-v-5439243a] {
  font-size: 2rem;
  color: #71777c;
}
.nav-item .icon[data-v-5439243a]:hover {
  color: #007fff;
}
.submit-fixed-bg[data-v-5439243a] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: 10;
}
.search-form[data-v-5439243a] {
  border: 1px solid hsla(0, 0%, 59.2%, 0.2);
  background-color: rgba(227, 231, 236, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  position: relative;
}
.search-form.active[data-v-5439243a] {
  background-color: #fff;
  border: 1px solid #007fff;
}
.search-form .search-icon[data-v-5439243a] {
  padding: 0 0.5rem;
  cursor: pointer;
}
.search-form .search-input[data-v-5439243a] {
  border: none;
  width: 11rem;
  padding: 0.6rem 0 0.6rem 1rem;
  box-shadow: none;
  outline: none;
  font-size: 1.1rem;
  color: #666;
  background-color: transparent;
}
.nav-menu[data-v-5439243a] {
  position: absolute;
  width: 11rem;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(177, 180, 185, 0.45);
  border-radius: 4px;
  font-size: 1.2rem;
}
.nav-menu .nav-menu-item-group[data-v-5439243a] {
  padding: 1rem 0;
}
.nav-menu .nav-menu-item[data-v-5439243a] {
  font-size: 1.3rem;
  cursor: pointer;
}
.nav-menu .nav-menu-item[data-v-5439243a]:hover {
  background-color: hsla(0, 0%, 94.9%, 0.5);
}
.nav-menu .nav-menu-item > a[data-v-5439243a] {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}
.nav-menu .nav-menu-item > a > span[data-v-5439243a] {
  margin-left: 0;
  flex-grow: 1;
}
.nav-menu .nav-menu-item > a.link-icon[data-v-5439243a] {
  padding-right: 0.5rem;
}
.nav-menu .nav-menu-item .collect[data-v-5439243a],
.nav-menu .nav-menu-item .zan[data-v-5439243a] {
  margin-right: 0.8rem;
  width: 18.72px;
  height: 18px;
}
.nav-menu .nav-menu-item .icon-2018[data-v-5439243a] {
  width: 38px;
  height: 20px;
  border-radius: 1rem;
  margin-left: 2px;
  background-image: url(https://gold-cdn.xitu.io/asset/2018/2018-icon.png);
  background-size: 102% 100%;
  background-repeat: no-repeat;
  box-shadow: 3px 3px 6px -3px #999;
}
.nav-menu .nav-menu-item .icon-2018[data-v-5439243a]:hover {
  opacity: 0.9;
}
.nav-menu .more[data-v-5439243a] {
  position: relative;
}
.nav-menu .more:hover .more-dropdown-list[data-v-5439243a] {
  display: block;
}
.nav-menu .more .more-icon[data-v-5439243a] {
  float: right;
  color: #b2bac2;
  font-size: 1.2rem;
  line-height: 2rem;
}
.nav-menu.user-dropdown-list[data-v-5439243a] {
  width: 13.1rem;
  right: 0;
  left: auto;
  transform: translateX(0);
}
.nav-menu.user-dropdown-list
  .nav-menu-item-group[data-v-5439243a]:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.add-group[data-v-5439243a] {
  display: flex;
  align-items: center;
  position: relative;
  height: 2.667rem;
  cursor: pointer;
}
.add-group.active .more-list[data-v-5439243a] {
  display: block;
}
.add-group .add-btn[data-v-5439243a],
.add-group .more[data-v-5439243a] {
  height: 100%;
  color: #fff;
  background-color: #007fff;
  border-radius: 3px;
}
.add-group .add-btn.active[data-v-5439243a],
.add-group .add-btn[data-v-5439243a]:hover,
.add-group .more.active[data-v-5439243a],
.add-group .more[data-v-5439243a]:hover {
  background-color: #0876e4;
}
.add-group .add-btn[data-v-5439243a] {
  padding: 0 0.9rem;
  font-size: 1.167rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.add-group .more[data-v-5439243a] {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  border-left: 1px solid hsla(0, 0%, 100%, 0.1);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.add-group .more .more-icon[data-v-5439243a] {
  margin-top: 0.2rem;
  font-size: 1rem;
}
.add-group .more-list[data-v-5439243a] {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0.417rem 0;
  font-size: 1.167rem;
  color: #3b76c5;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: none;
  z-index: 1;
}
.add-group .more-list .item[data-v-5439243a] {
  padding: 0 0 0 0.8rem;
  line-height: 1.9;
}
.add-group .more-list .item[data-v-5439243a]:hover {
  background-color: #f9f9f9;
}
.more-dropdown-list[data-v-5439243a] {
  position: absolute;
  left: auto;
  top: 0;
  right: 102%;
  transform: translateX(0);
  display: none;
}
.more-dropdown-list[data-v-5439243a]:after {
  content: "";
  position: absolute;
  top: 0;
  left: 100%;
  width: 1.3rem;
  height: 4rem;
}
.notification[data-v-5439243a] {
  position: relative;
}
.notification.active .icon[data-v-5439243a] {
  color: #007fff;
}
.notification .count[data-v-5439243a] {
  position: absolute;
  left: 50%;
  bottom: 43%;
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  text-align: center;
  background-color: #007fff;
  border-radius: 3rem;
  word-break: normal;
  display: inline-block;
  color: #f1f1f1;
  transform: scale(0.8);
  font-size: 13px;
  font-weight: 500;
  padding: 3px 6px;
  background: #f03535;
  border-radius: 100px;
  border: 2px solid #fff;
}
.fengwei[data-v-5439243a] {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 0.8rem;
  font-size: 1.2em;
  vertical-align: middle;
  color: #b2bac2;
}
.fix-bg[data-v-5439243a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
}
.mobile[data-v-5439243a] {
  display: none;
}
@media (max-width: 980px) {
  .logo[data-v-5439243a] {
    margin-right: 0;
    margin-left: 0.67rem;
  }
  .container[data-v-5439243a] {
    width: 96%;
  }
  .main-nav-list[data-v-5439243a] {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
  .phone-show-menu[data-v-5439243a] {
    height: 5rem;
    display: flex;
    align-items: center;
    color: #007fff;
    font-size: 1.33rem;
    justify-content: center;
    padding: 0;
    width: 5.66rem;
  }
  .phone-show-menu span[data-v-5439243a] {
    margin-right: 0.6rem;
  }
  .phone-hide[data-v-5439243a] {
    display: none;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(177, 180, 185, 0.45);
    border-radius: 4px;
    font-size: 1.2rem;
  }
  .phone-hide.show[data-v-5439243a] {
    display: block;
  }
  .phone-hide .nav-item a.activity-entry[data-v-5439243a] {
    display: none;
  }
  .phone-hide .nav-item .activity-entry-mobile[data-v-5439243a] {
    display: inline-block;
  }
  .nav-item.link-item[data-v-5439243a] {
    height: 4rem;
  }
  .nav-item.add[data-v-5439243a],
  .nav-item.submit[data-v-5439243a],
  .pinTip[data-v-5439243a] {
    display: none;
  }
  .tip[data-v-5439243a] {
    display: none !important;
  }
  .nav-menu .nav-menu-item .icon-2018[data-v-5439243a] {
    width: 35px;
    margin-left: 0;
  }
}
@media (max-width: 700px) {
  .nav-item.search[data-v-5439243a] {
    display: flex;
    padding-right: 1.2rem;
  }
  .nav-item .search-form .search-input[data-v-5439243a] {
    width: 11rem;
    padding: 0.6rem;
  }
  .nav-item .search-form .search-icon[data-v-5439243a] {
    display: none;
  }
  .logo[data-v-5439243a] {
    min-width: 3.75rem;
  }
  .logo-img[data-v-5439243a] {
    display: none;
  }
  .mobile[data-v-5439243a] {
    display: block;
  }
  .notification[data-v-5439243a] {
    padding: 0 0.8rem;
  }
}
@media (max-width: 375px) {
  .nav-item .search-form .search-input[data-v-5439243a] {
    width: 10rem;
  }
}
@media (max-width: 330px) {
  .nav-item.search[data-v-5439243a] {
    display: none;
  }
  .nav-item.search .search-form .search-input[data-v-5439243a] {
    width: 5rem;
  }
}
.tip-fade-enter-active[data-v-5439243a],
.tip-fade-leave-active[data-v-5439243a] {
  transition: 0.3s;
}
.tip-fade-enter[data-v-5439243a],
.tip-fade-leave-to[data-v-5439243a] {
  transform: translateY(-10px);
  opacity: 0;
}
.typehead[data-v-5439243a] {
  width: 100%;
  position: absolute;
  top: 105%;
  line-height: 2rem;
  left: 0;
  z-index: 1000;
  min-width: 6rem;
  font-size: 1rem;
  color: #869aab;
  list-style: none;
  text-align: left;
  border-radius: 0.17rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ebebeb;
  background-color: #fff;
}
.typehead .title[data-v-5439243a] {
  border-bottom: 1px solid #ebebeb;
  margin: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
}
.typehead .title .clear[data-v-5439243a] {
  cursor: pointer;
}
.typehead .list[data-v-5439243a] {
  cursor: pointer;
  color: #5e6369;
}
.typehead .list div[data-v-5439243a] {
  padding: 0.2rem 1rem;
}
.typehead .list div[data-v-5439243a]:hover {
  background: #eff2f5;
}
.avatar[data-v-3ce2bd44] {
  display: inline-block;
  position: relative;
  background-size: cover;
  background-color: #eee;
}
.avatar[data-v-3ce2bd44],
.avatar.xmas[data-v-3ce2bd44]:after {
  background-position: 50%;
  background-repeat: no-repeat;
}
.avatar.xmas[data-v-3ce2bd44]:after {
  content: "";
  position: absolute;
  left: 25%;
  bottom: 30%;
  width: 90%;
  height: 90%;
  background-size: contain;
  background-image: url(//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/hats.12a740a.svg);
  transform: rotate(15deg);
  transform-origin: bottom right;
  transition: all 0.2s;
}
.avatar.xmas[data-v-3ce2bd44]:hover:after {
  transform: rotate(20deg);
}
.lazy[data-v-fd37d0ac] {
  position: relative;
  -o-object-fit: cover;
  object-fit: cover;
}
.lazy[data-v-fd37d0ac]:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: inherit;
  border-radius: inherit;
}
.lazy[data-v-fd37d0ac]:not(.immediate):before {
  transition: opacity 0.2s;
}
.nav-list[data-v-f573cf64] {
  position: relative;
}
.nav-list .nav-item.right[data-v-f573cf64] {
  position: absolute;
  top: 0;
  right: 0;
}
@media (max-width: 960px) {
  .nav-list .nav-item[data-v-f573cf64]:first-child {
    padding-left: 2rem;
  }
}
.nav-list .nav-item.tag[data-v-f573cf64] {
  height: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  font-size: 1.17rem;
  color: #8a9aa9;
  padding: 0 0.83rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.nav-list .nav-item.tag.active[data-v-f573cf64] {
  background-color: #007fff;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.tag-list[data-v-f573cf64] {
  display: flex;
  flex-wrap: wrap;
  padding-top: 16px;
  height: auto;
}
.tag-list.hide[data-v-f573cf64] {
  display: none;
}
.fade-enter-active[data-v-f573cf64],
.fade-leave-active[data-v-f573cf64] {
  transition: opacity 0.5s;
}
.fade-enter[data-v-f573cf64],
.fade-leave-to[data-v-f573cf64] {
  opacity: 0;
}
@media (max-width: 960px) {
  .nav-item.right[data-v-f573cf64] {
    display: none;
  }
}
.category-popover[data-v-9786f6f8] {
  position: fixed;
  top: 3.75rem;
  left: 2rem;
  padding: 1.17rem 1.17rem 0.17rem;
  width: 30rem;
  max-height: 16.67rem;
  font-weight: 400;
  line-height: 1.2;
  background-color: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 2px;
  cursor: default;
  z-index: 250;
}
.category-popover .tag-list[data-v-9786f6f8] {
  display: flex;
  flex-wrap: wrap;
}
.category-popover .tag[data-v-9786f6f8] {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: #f4f5f5;
  border-radius: 1rem;
  font-size: 1.1rem;
  color: #71777d;
  padding: 0 0.83rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 600px) {
  .category-popover .tag[data-v-9786f6f8] {
    margin-right: 0.83rem;
    margin-bottom: 0.75rem;
  }
}
.category-popover .tag[data-v-9786f6f8]:hover {
  color: #007fff;
}
.category-popover .tag.active[data-v-9786f6f8] {
  background-color: #007fff;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.category-popover .tag.active > a[data-v-9786f6f8] {
  color: #fff;
}
@media (max-width: 700px) {
  .category-popover[data-v-9786f6f8] {
    display: none;
  }
}
.fade-enter-active[data-v-9786f6f8],
.fade-leave-active[data-v-9786f6f8] {
  transition: opacity 0.2s;
}
.fade-enter[data-v-9786f6f8],
.fade-leave-to[data-v-9786f6f8] {
  opacity: 0;
}
.nav-list[data-v-4f70b060] {
  position: relative;
}
.nav-list .nav-item.right[data-v-4f70b060] {
  position: absolute;
  top: 0;
  right: 0;
}
.nav-list .nav-item[data-v-4f70b060] {
  font-size: 1.25rem;
}
.nav-list .nav-item.tag[data-v-4f70b060] {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  font-size: 1.1rem;
  color: #8a9aa9;
  padding: 0 0.83rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 600px) {
  .nav-list .nav-item.tag[data-v-4f70b060] {
    margin-right: 0.83rem;
    margin-bottom: 0.75rem;
  }
}
.nav-list .nav-item.tag.active[data-v-4f70b060] {
  background-color: #007fff;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.nav-list .nav-item.tag.active > a[data-v-4f70b060] {
  color: #fff;
}
.nav-list .nav-item.unfold[data-v-4f70b060] {
  padding-right: 2rem;
}
.nav-list .nav-item.unfold[data-v-4f70b060]:hover {
  color: #007fff;
}
.nav-list .nav-item.unfold[data-v-4f70b060]:hover:after {
  border-top: 5px solid #007fff;
}
.nav-list .nav-item.unfold[data-v-4f70b060]:after {
  position: absolute;
  right: 8px;
  bottom: 14%;
  content: "";
  height: 5px;
  width: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #8a9aa9;
}
.tag-list[data-v-4f70b060] {
  display: flex;
  flex-wrap: wrap;
  height: auto;
}
@media (max-width: 960px) {
  .tag-list[data-v-4f70b060] {
    padding-left: 2rem;
  }
}
.tag-list.hide[data-v-4f70b060] {
  display: none;
}
.fade-enter-active[data-v-4f70b060],
.fade-leave-active[data-v-4f70b060] {
  transition: opacity 0.5s;
}
.fade-enter[data-v-4f70b060],
.fade-leave-to[data-v-4f70b060] {
  opacity: 0;
}
@media (max-width: 960px) {
  .nav-item.right[data-v-4f70b060] {
    display: none;
  }
}
.entry-list-container[data-v-42d1c148] {
  background-color: #fff;
}
.list-nav[data-v-42d1c148] {
  justify-content: flex-start;
}
.list-nav .nav-list.left .nav-item[data-v-42d1c148] {
  font-size: 1.17rem;
}
.list-header .nav-list .nav-item.dropdown a[data-v-42d1c148] {
  color: #007fff;
}
.dorp-down-area[data-v-42d1c148] {
  position: relative;
}
.dorp-down-area .drop-down[data-v-42d1c148] {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
@-webkit-keyframes xitu-skeleton-animation-data-v-7e037fb6 {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: 480px 0;
  }
}
@keyframes xitu-skeleton-animation-data-v-7e037fb6 {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: 480px 0;
  }
}
.xitu-skeleton-animated .xitu-skeleton-avatar[data-v-7e037fb6],
.xitu-skeleton-animated .xitu-skeleton-line[data-v-7e037fb6] {
  background: linear-gradient(90deg, #fff, #edeff1, #fff);
  background-size: 480px 480px;
  -webkit-animation: xitu-skeleton-animation-data-v-7e037fb6 0.6s linear
    infinite;
  animation: xitu-skeleton-animation-data-v-7e037fb6 0.6s linear infinite;
}
.xitu-skeleton[data-v-7e037fb6] {
  width: 100%;
  background-color: #fff;
}
.xitu-skeleton-avatar[data-v-7e037fb6] {
  float: left;
  margin-right: 12px;
  background-color: #f3f3f3;
  display: block;
}
.xitu-skeleton-avatar-circle[data-v-7e037fb6] {
  border-radius: 50%;
}
.xitu-skeleton-avatar-square[data-v-7e037fb6] {
  border-radius: 15%;
}
.xitu-skeleton-item[data-v-7e037fb6] {
  padding-bottom: 21px;
  margin-bottom: 21px;
  border-bottom: 1px solid #f3f3f3;
}
.xitu-skeleton-item[data-v-7e037fb6]:last-child {
  padding: 0;
  margin: 0;
  border: none;
}
.xitu-skeleton-content[data-v-7e037fb6] {
  overflow: hidden;
  padding: 20px;
}
.xitu-skeleton-line[data-v-7e037fb6] {
  width: 100%;
  margin-bottom: 16px;
  height: 14px;
  background: #f3f3f3;
}
.xitu-skeleton-line[data-v-7e037fb6]:first-child {
  width: 40%;
  margin-top: 8px;
}
.xitu-skeleton-line[data-v-7e037fb6]:nth-child(3) {
  width: 80%;
}
.xitu-skeleton-line[data-v-7e037fb6]:last-child {
  width: 60%;
  margin-bottom: 0;
}
.activity-empty[data-v-8739e5ce] {
  padding: 20px;
  background-color: #fff;
  border-radius: 0 0 0.2rem 0.2rem;
  height: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: #b2bac2;
  margin-bottom: 0.67rem;
}
.activity-empty .empty-text[data-v-8739e5ce] {
  margin-top: 10px;
}
.activity-empty .login-button[data-v-8739e5ce] {
  margin-top: 14px;
  font-size: 1.166rem;
  color: #027fff;
  width: 6.666rem;
  height: 2.833rem;
  background: transparent;
  border-radius: 2px;
  border: 1px solid #027fff;
}
.index-aside[data-v-b6ac35fe] {
  width: 20rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.index-aside.sticky .sticky-block[data-v-b6ac35fe] {
  opacity: 1;
  top: 127px;
  z-index: 5;
  pointer-events: all;
}
.index-aside.sticky.top .sticky-block[data-v-b6ac35fe] {
  top: 67px;
}
.sidebar-block[data-v-b6ac35fe] {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  margin-bottom: 1.3rem;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}
.sidebar-block li[data-v-b6ac35fe] {
  list-style: none;
}
.sidebar-block.banner-block[data-v-b6ac35fe] {
  overflow: hidden;
}
.sidebar-block.banner-block .banner[data-v-b6ac35fe] {
  height: 200px;
}
.sidebar-block.sticky-block[data-v-b6ac35fe] {
  position: fixed;
  background-color: transparent;
  box-shadow: none;
  opacity: 0;
  transition: all 0.2s;
  width: 20rem;
  z-index: -1;
  top: 67px;
  pointer-events: none;
}
.sidebar-block.sticky-block .sticky-author-block[data-v-b6ac35fe] {
  margin-bottom: 1.3rem;
}
.sidebar-block.sticky-block .sticky-banner[data-v-b6ac35fe] {
  height: 200px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  overflow: hidden;
}
.sidebar-block.sticky-block .sticky-banner[data-v-b6ac35fe]:not(:last-child) {
  margin-bottom: 1.3rem;
}
.sidebar-block.user-block .user-block-header[data-v-b6ac35fe] {
  padding: 1rem 1.3rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.sidebar-block.user-block .item .link[data-v-b6ac35fe] {
  padding: 1rem 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.sidebar-block.user-block .item .link[data-v-b6ac35fe]:hover {
  background-color: hsla(0, 0%, 84.7%, 0.1);
}
.sidebar-block.user-block .item .link .avatar[data-v-b6ac35fe] {
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.8rem;
}
.sidebar-block.user-block .item .link .user-info[data-v-b6ac35fe] {
  overflow: hidden;
}
.sidebar-block.user-block .item .link .username[data-v-b6ac35fe] {
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sidebar-block.user-block .item .link .position[data-v-b6ac35fe] {
  color: #909090;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sidebar-block.user-block .item .more[data-v-b6ac35fe] {
  color: #909090;
  padding: 1rem 0;
  text-align: center;
  border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.sidebar-block.user-block .item .more[data-v-b6ac35fe]:hover {
  cursor: pointer;
  color: #007fff;
}
.sidebar-block.link-block .link-list[data-v-b6ac35fe] {
  padding: 0;
}
.sidebar-block.link-block .item[data-v-b6ac35fe] {
  position: relative;
}
.sidebar-block.link-block .item[data-v-b6ac35fe]:hover {
  background-color: hsla(0, 0%, 84.7%, 0.1);
}
.sidebar-block.link-block .link[data-v-b6ac35fe] {
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 100%;
}
.sidebar-block.link-block .icon[data-v-b6ac35fe] {
  width: 3rem;
  margin-right: 0.8rem;
}
.sidebar-block.link-block .title[data-v-b6ac35fe] {
  position: relative;
  font-size: 1.16rem;
  line-height: 1;
  color: #333;
}
.sidebar-block.more-block[data-v-b6ac35fe] {
  background-color: transparent;
  box-shadow: none;
}
.sidebar-block.more-block .more-list[data-v-b6ac35fe] {
  font-size: 1rem;
  line-height: 1.6;
  color: #9aa3ab;
}
.sidebar-block.more-block .more-list[data-v-b6ac35fe]:after {
  display: table;
  content: "";
  clear: both;
}
.sidebar-block.more-block .more-list .item[data-v-b6ac35fe] {
  float: left;
}
.sidebar-block.more-block
  .more-list
  .item[data-v-b6ac35fe]:not(:last-child):after {
  content: "·";
  margin: 0 0.5rem;
  color: #c6cfda;
}
.sidebar-block.more-block .more-list .item span[data-v-b6ac35fe] {
  color: #909090;
}
.sidebar-block .account-list[data-v-b6ac35fe] {
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0;
}
.sidebar-block .account-list .icon[data-v-b6ac35fe] {
  width: 24px;
  cursor: pointer;
}
.sidebar-block .account-list .icon:hover + .qr-panel[data-v-b6ac35fe] {
  opacity: 1;
}
.sidebar-block .account-list .wechat[data-v-b6ac35fe] {
  position: relative;
}
.sidebar-block .account-list .wechat .qr-panel[data-v-b6ac35fe] {
  position: absolute;
  background: #fff;
  width: 10rem;
  top: 100%;
  left: -100%;
  z-index: 2;
  padding: 0.8rem 0 0;
  opacity: 0;
  border: 1px solid #ddd;
  transform: translate(-24px);
}
.sidebar-block .account-list .wechat .title[data-v-b6ac35fe] {
  text-align: center;
}
.sidebar-block .account-list .wechat .qr[data-v-b6ac35fe] {
  width: 100%;
}
@media (max-width: 960px) {
  .index-aside[data-v-b6ac35fe] {
    display: none;
  }
}
.app-link[data-v-4d0aa6be] {
  display: flex;
  align-items: center;
  padding: 1.3rem;
}
.app-link:hover .close-btn[data-v-4d0aa6be] {
  display: block;
}
.qr-img[data-v-4d0aa6be] {
  margin-right: 0.5rem;
  width: 4.167rem;
  height: 4.167rem;
}
.headline[data-v-4d0aa6be] {
  font-size: 1.167rem;
  font-weight: 600;
  color: #333;
}
.desc[data-v-4d0aa6be] {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #909090;
}
.close-btn[data-v-4d0aa6be] {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  color: #999;
  opacity: 0.3;
  cursor: pointer;
  z-index: 1;
  display: none;
}
.close-btn[data-v-4d0aa6be]:hover {
  opacity: 1;
}
.extension[data-v-b900bb90] {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 180px;
  cursor: pointer;
  display: none;
}
.extension[data-v-b900bb90]:before {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
  height: 148px;
  z-index: -1;
  content: "";
  background-color: #fff;
}
.extension .link[data-v-b900bb90] {
  width: 100%;
  height: 100%;
  color: #000;
  background-repeat: no-repeat;
  background-image: url(//sf6-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/extension.c1307da.png);
  background-position: bottom;
  background-size: auto 180px;
  image-rendering: -webkit-optimize-contrast;
}
.extension .link .price[data-v-b900bb90] {
  margin-left: 5px;
  margin-right: 5px;
  color: #007fff;
}
.extension .link .description[data-v-b900bb90],
.extension .link .title[data-v-b900bb90] {
  font-size: 26px;
  padding-top: 50px;
  box-sizing: border-box;
  width: 960px;
  margin: 0 auto;
  padding-left: 22px;
}
.extension .link .description[data-v-b900bb90] {
  color: rgba(0, 0, 0, 0.7);
  font-size: 13px;
  padding-top: 8px;
}
.extension .ion-close[data-v-b900bb90] {
  position: absolute;
  top: 45px;
  right: 15px;
  font-size: 12px;
  color: #bbb;
}
.extension .ion-close[data-v-b900bb90]:hover {
  color: #999;
}
.books[data-v-b900bb90] {
  display: none;
  left: 15px;
  right: 15px;
  position: fixed;
  bottom: 15px;
  z-index: 900;
}
.books.book--mobile[data-v-b900bb90] {
  bottom: 55px;
}
.books .book-inner[data-v-b900bb90] {
  width: 100%;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fd4243;
  box-sizing: border-box;
  border-radius: 2px;
  background: linear-gradient(108deg, #f87554, #f0232f);
  background: -webkit-linear-gradient(-12deg, #f87554, #f0232f);
}
.books .book-inner .icon[data-v-b900bb90] {
  width: 38px;
}
.books .book-inner .icon img[data-v-b900bb90] {
  width: 100%;
  display: block;
}
.books .book-inner .title[data-v-b900bb90] {
  flex-grow: 1;
  padding-left: 15px;
  color: #fff;
  font-size: 15px;
}
.books .book-inner .btn-get[data-v-b900bb90] {
  padding-left: 15px;
  padding-right: 15px;
  height: 26px;
  line-height: 26px;
  border-radius: 2px;
  border: 1px solid #fff;
  color: #fff;
}
@media (max-width: 960px) {
  .books[data-v-b900bb90] {
    display: block;
  }
}
@media (min-width: 960px) {
  .extension[data-v-b900bb90] {
    display: block;
  }
}

</style>