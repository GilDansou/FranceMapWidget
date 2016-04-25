#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
FranceMapWidget <- function(width = NULL, height = NULL,data,region,session,input) {

  if (is.null(region)){

  }else{
    if ( is.null(laginput)){
      updateTextInput(session, "FranceMapformcontrol1234567",
                      value = region
      )
    }else{
      print(region)
      print(laginput)
      if (region != laginput){
        updateTextInput(session, "FranceMapformcontrol1234567",
                        value = region
        )
        id = ".jqvmap-region"
        code = paste("$('",id,"').attr('fill','#5BC6ED');",sep="")
        shinyjs::runjs(code)
        id = FranceDep[FranceDep[,1]==region,2]
        code = paste("$('",id,"').attr('fill','#EC0000');",sep="")
        shinyjs::runjs(code)
      }else{
        updateTextInput(session, "regio",
                        value = input$FranceMapformcontrol1234567
        )
      }
    }
  }

  table = data[data[,1]==input$FranceMapformcontrol1234567,2:3]
  print(table)
  assign("laginput",region,envir = globalenv())
  # forward options using  x
  x = list(
    region    = input$FranceMapformcontrol1234567,
    table = jsonlite::toJSON(table,dataframe = c("values"))
  )


  # create widget
  htmlwidgets::createWidget(
    name = 'FranceMapWidget',
    x,
    width = width,
    height = height,
    package = 'FranceMapWidget'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
FranceMapWidgetOutput <- function(outputId, width = '100%', height = '0px',Width="700px",Height="600px"){
    shinyWidgetOutput(outputId, 'FranceMapWidget', width, height, package = 'FranceMapWidget')
}

#' Widget render function for use in Shiny
#'
#' @export
renderFranceMapWidget <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, FranceMapWidgetOutput, env, quoted = TRUE)
}

FranceMapStart <- function() {
  inputTag = tagList(
    shinyjs::useShinyjs(),
    textInput("FranceMapformcontrol1234567",
              "")
  )
  inputTag
}

