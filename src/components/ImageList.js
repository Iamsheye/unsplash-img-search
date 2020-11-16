import React from "react";
import styled from "styled-components";
import P from "./P";
import Image from "./Image";

const Mb = styled.div`
  margin-bottom: ${({margin}) => margin };
`;

const Grid = styled.div`
  
`;

const ImageList = ({ images }) => {
  return (
    <Grid>
      {images.map((img) => {
        return (
          <div className="grid">
            <div className="ui segment">
              <Image img={img} />
              <P color="#333">{img.description}</P>
            </div>
            <Mb margin="6px" />
          </div>
        )
      })}
    </Grid>
  );
}

export default ImageList;