<template lang="html">
  <footer class="footer">
    <p class="copyrights1">	&#169; Davy &amp; Orsted </p>
      <div class="legal-information">
        <p><a href="/voorwaarden">Terms &amp; Conditions</a></p>
        <p><a href="/privacystatement">Privacy Statement</a></p>
      </div>
    <p class="copyrights2">	&#169; Davy &amp; Orsted </p>
  </footer>
</template>

<style lang="css" scoped>
.footer{
  position: relative;
  height: 200px;
}
.copyrights1{
  display: none;
}
.legal-information > p > a{
  margin: 20px;
  font-family: FuturaStd;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: 2px;
  color: #acadaf;
  text-decoration: underline;
}
.copyrights2{
  position: absolute;
  bottom: 0;
  width: auto;
  font-family: FuturaStd;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: normal;
  color: #97a0a7;
  margin-top: 40px;
  margin-left: 20px;
}

@media (min-width: 927px) {
  .footer{
    margin-bottom: 20px;
    width: 100%;
  }
  .legal-information{
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
  }
  .copyrights1{
    display: block;
    text-align: left;
    float: left;
    padding-left: 77px;
    font-family: FuturaStd;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.29;
    letter-spacing: normal;
    color: #97a0a7;
  }
  .copyrights2{
    display: none;
  }
}
</style>
