class slider{
    constructor(){
this.image=[]
this.image[0]="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/best-new-movies-netflix-march-2021-v2.png"
this.image[1]="https://img.cinemablend.com/filter:scale/quill/2/6/5/0/0/f/26500f47d83e7a16f919f298680f4f57bf308371.jpg?mw=600"
this.image[2]="https://img7.cdn.cinoche.com/images/a1551d126439cf9ecf461171a7174768.jpg"
this.image[3]="https://filmdaily.co/wp-content/uploads/2020/06/2021lede-1300x650.jpg"


this.links=[]
this.links[0]="#lien"
this.links[1]="#lien"
this.links[2]="#lien"
this.links[3]="#lien"

this.counter=0
setInterval(()=>{
    this.playslider()
},3000)
    }
    playslider(){
        if(this.counter<this.image.length -1){
       this.counter++
        }else{
        this.counter=0
        }
        document.slidershow.src=this.image[this.counter]
        document.getElementById("linkimg").href=this.links[this.counter]
    }
}
onload=new slider()