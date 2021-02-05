<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog && blog.title }}</h3>
        <div class="blog-content">
          <p>{{ blog && blog.content }}</p>
        </div>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <div class="comments">
        <div class="comment-content">
          <textarea name="" cols="150" rows="3" v-model="content"></textarea>
          <button @click="postCom">发表评论</button>
        </div>
        <div class="comment" v-for="item in comList" :key="item.blogId">
          <p>{{ item.comm_content }}</p>
          <div class="comment-info">
            <span class="post-time">时间：{{ item.comm_post_time }} </span>
            <span class="userinfo">用户：{{ item.username }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comList: [],
      blog: null,
      content: "",
    };
  },
  created() {
    this.getBlogDetail();
    //this.getComData();
  },
  methods: {
    getBlogDetail() {
        console.log(77);
      let blogId = this.$route.params.blogId;
      //console.log("blog_id:",blogId);//blogId传到了
      this.$http
        .get("/blog/detail", {
          params: {
            blogId: blogId,
          },
        })
        .then((res) => {
          let { state, blog } = res.data;
          if (state == "success") {
            this.blog = blog;
            this.comList = blog.comments;
            console.log(5666666666666666666);
          }
        });
    },
    postCom() {
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        let blogId = this.$route.params.blogId;
        let postTime = new Date();
        this.$http
          .post("/blog/comment", {
            content: this.content,
            blogId: blogId,
            userId: loginUser.user_id,
            postTime: postTime,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/blog/detail/"+blogId);
              location. reload()
              alert("评论成功！！！")
            } else {
              alert("发表评论失败!");
            }
          });
      } else {
        alert("您还没有登录，请前往登录!!!");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
</style>
