# input data
left <- as.character(SIVAS_Report$ID_YEAR)
right <- as.character(SIVAS_Report$OSP_I)
measure <- SIVAS_Report$order

# data prep for charting
df_raw <- data.frame(left, right, measure, stringsAsFactors=FALSE)
df_sorted <- df_raw[order(df_raw$left, df_raw$right), ]

# Plot
library('plotly')
plot_ly(
  type = 'sankey',
  orientation = 'h',
  textfont = list(size=15),
  node = list(
    label = c(unique(df_sorted[order(df_sorted$left, df_sorted$right), ]$left), (df_sorted[order(df_sorted$left, df_sorted$right), ]$right)),
    color = c(rep("ed7c31", length(unique(df_sorted$left))), rep("5b9bd5", length(unique(df_sorted$right)))),
    pad = 10,
    thickness = 30,
    line = list(
      color = "black",
      width = 1
    )
  ),
  link = list(
   source = as.integer(factor(df_sorted[order(df_sorted$left, df_sorted$right), ]$left)) -1,
    target = c(length(unique(df_sorted$left)) : (length(unique(df_sorted$left)) + length(unique(df_sorted$right)) - 1)),
    value =  df_sorted[order(df_sorted$left, df_sorted$right), ]$measure
  )
)