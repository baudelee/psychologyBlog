'use strict';
/**
 * base adapter
*/
export default class extends think.adapter.base {
  /**
   * init
   * @return {[]}
   */
  init(http) {
    super.init(http);
    this.http = http;
  }
  pagination(pageData) {
    let page = this.http.get("page")||1;
    console.log(this.http.get("page"));
    let nextclass='',preclass='',nextlink='',prelink='';

    if(page) {
      //下一页判断
      if(pageData.currentPage === pageData.totalPages){
        nextclass='disabled';
        nextlink='javascript:void(0)';
      }else{
        var nextpage = pageData.currentPage+1;
        nextclass = '';
        nextlink='?page='+nextpage+'&pagesize='+pageData.numsPerPage;
      }
      //上一页判断
      if(pageData.currentPage===1){
        preclass='disabled';
        prelink='javascript:void(0)';
      }else{
        var prepage= pageData.currentPage-1;
            preclass='';
            prelink='?page='+prepage+'&pagesize='+pageData.numsPerpage;
      }

      // 很多页时的显示
      let pageStart = 1,pageNum=6,pageEnd,pageNow=pageData.currentPage;
      if(pageNow<=pageNum/2+1){
        pageStart=1;
        pageEnd=pageNum;
      }else{
        pageStart=pageNow - pageNum / 2;
        pageEnd = pageNow + pageNum / 2 - 1;
      }
      if(pageEnd>pageData.totalPages){
        pageEnd=pageData.totalPages;
      }
      if(pageEnd<=pageNum){
        pageStart=1;
      }

      // 返回数据
      return {
        "pageStart":pageStart,
        "pageEnd":pageEnd,
        "nextclass":nextclass,
        "preclass":preclass,
        "nextlink":nextlink,
        "prelink":prelink,
        "count":pageData.count,
        "totalPages":pageData.totalPages,
        "numsPerPage":pageData.numsPerpage,
        "currentPage":pageData.currentPage
      }
    }
  }
}