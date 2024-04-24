fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ca681b7105ea4fd1a0fd3722ba8bb0dd")
  .then(res=>res.json())
  .then(response =>{
    console.log(response)
   let parent=document.querySelector("#parent")
   let father=document.querySelector("#father")
   for(let i=0;i<response.articles.length;i++) {
    const obj=response.articles[i]
     
      let div=document.createElement('div')
      div.setAttribute("class","third")

      let anchor=document.createElement('a')
      anchor.setAttribute("href",obj.url)

      let img=document.createElement('img')
      img.setAttribute("src",obj.urlToImage)
      anchor.appendChild(img)
    
      let h4=document.createElement('h4')
      h4.textContent=obj.title

      let p=document.createElement('p')
      p.textContent=obj.description
      div.append(anchor)
      let div2=document.createElement('div')
      div2.append(h4)
      div2.append(p)
      div.append(div2)
      parent.appendChild(div)
    }
  })
  .catch(err=>{
    console.log(err)
  })