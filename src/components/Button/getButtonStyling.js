

function getButtonStyling(styleType) {
    if (styleType === "primary") {
      return "bg-blue-500";
    }
    else if(styleType ==='secondary'){
        return 'bg-yellow-500'
    }
    else if(styleType ==='error'){
        return 'bg-green-500'
    }
    else if(styleType  ==='warning'){
        return 'bg-red-600'
    }
  }

  export default getButtonStyling;