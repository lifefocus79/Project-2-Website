(document).ready(function() {
    console.log( "ready!" );
  
    // REST
  
    $('#fetch-beach-gifs').on('click', (event) => {
      console.log('data');
  
      fetch('https://api.giphy.com/v1/gifs/search?api_key=z2ZEbH87cd8iuCJQMq12G5SWX0wx0Mpf&q=beach')
      .then((res) => {
        return res.json();
      }).then((result) => {
        console.log('result is:',result);      
        console.log('data array is:', result.data)
        console.log('first result in the result array is:', result.data[0])
        console.log('images in the first result in the result array are:', result.data[0].images);
        console.log('the original image of the images in the first result in the result array is:', result.data[0].images.original);
        console.log('url of the original image of the images in the first result in the result array is:', result.data[0].images.original.url);
  
        let html = "";
        for(let img of result.data){
          console.log(img.images.original.url);
          let str = `<img src=${img.images.original.url} />`;
          html = html + str;
        }
  
        console.log(html);
        $('#result').html(html);
  
      });
  
  
    });
  
  
  
  
  
    $('#fetch-a-beach').on('click', (event) => {
      console.log('button was clicked!');
  
      fetch('https://api.giphy.com/v1/gifs/search')
      .then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data);
        console.log(data.message);
        let imgUrl = data.message;
        let img = `<img src=${imgUrl} />`;
        console.log(img);
        $('#result').html(img);
  
      });
  
    })
  
  });
  
  
  