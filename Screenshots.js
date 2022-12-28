import data_light from "./Data/data_light.js";
import data_dark from "./Data/data_dark.js";

$(document).ready(function () 
{
    populate_images();
    $("#contentParent").append(image_element);
});

var image_element = "";

function populate_images()
{
    var i = 0, j = 0;

    for(i = 0; i < data_light.length; i = i + 1)
    {
        image_element = image_element +
                        "<div class=\"d-flex justify-content-center\">" +
                            "<div class=\"card-group d-flex justify-content-center\">";
                            
        
        for(j = 0; j < data_light[i].carousel_elements.length; j = j + 1)
        {
            image_element = image_element +
                                "<img class=\"center screenshot-" + data_light[i].class + "\" src=\"" + data_light[i].carousel_elements[j].src + "?raw=true\" alt=\"" + data_light[i].carousel_elements[j].alt + "\">";
        }

        if(i < data_dark.length)
        {
            for(j = 0; j < data_dark[i].carousel_elements.length; j = j + 1)
            {
                image_element = image_element +
                                    "<img class=\"center screenshot-" + data_dark[i].class + "\" src=\"" + data_dark[i].carousel_elements[j].src + "?raw=true\" alt=\"" + data_dark[i].carousel_elements[j].alt + "\">";
            }
        }

        if(i < data_light.length - 1)
            image_element = image_element +
                                "</div>" +
                            "</div>" +
                            "<hr>";
                    
        else
            image_element = image_element +
                                "</div>" +
                            "</div>";
    }
}