var images = ["","https://www.iwmbuzz.com/wp-content/uploads/2021/06/when-blackpink-rose-revealed-her-favourite-on-stage-outfit-9.jpeg",
 "https://img.jakpost.net/c/2020/06/18/2020_06_18_98084_1592467460._large.jpg"
  , "http://pm1.narvii.com/7076/d99dfe88ce00dc19ecc8b938b0d165243018b490r1-900-750v2_uhq.jpg",
   "https://i.zoomtventertainment.com/story/Lisa_lead.jpg?tr=w-1200,h-900"];
var names = ["Blackpink Album","Blackpink Rosé", "Blackpink Jisoo", "Blackpink Jennie", "Blackpink Lisa"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array =4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
      function update(){
        document.getElementById("family_member_image").src=images[i];
        document.getElementById("family_member_names").innerHTML=names[i];
        i++;
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
      }

