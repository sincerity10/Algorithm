def get_max_area(height):
  rect = 0
  hei = 0
  width = 0
  for idx1 in range(len(height)):
    for idx2 in range(idx1+1,len(height)):
      if height[idx1] > height[idx2]:
        hei = height[idx2]
      else:
        hei = height[idx1]
        
      width = idx2-idx1
      if rect < width * hei:
        rect = width * hei
      else:
        pass
      
  return rect