<template>
<div >
    <div class="footer">
        <p>Valorant Stats &copy; 2022</p>
        <p class="footer-links">
            <a class="link-1" href="#">Home</a>
            <a href="#">Agents</a>
            <a href="#">Maps</a>
            <a href="#">Weapons</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer',
    props:{
        name: String,
    }
}
</script>

<style>

.footer {
 background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  font: 16px ;
  padding: 30px 10px;
  display: flex;



}

.footer p{
font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
  transition: ease .25s;
  align-items: center;
}

.footer p.footer-links {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
  top: 20px;
  text-align: center;
  transition: ease .25s;
}

.footer p.footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  text-align: center;
  color: inherit;
  transition: ease .25s;
}

.footer .footer-links a:before {
  content: "·";
  font-size: 20px;
  left: 0;
  color: #fff;
  text-align: center;
  display: inline-block;
  padding-right: 5px;
}
</style>