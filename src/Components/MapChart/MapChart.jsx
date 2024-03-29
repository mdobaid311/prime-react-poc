import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

import allStates from "./data.json";
import { scaleLinear } from "d3-scale";
import states from "./states.json";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};
const colorScale = scaleLinear().domain([0, 100]).range(["#FFF", "#06F"]);

const MapChart = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <ComposableMap projection="geoAlbersUsa" className="h-full">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const stateId =
                  Object?.entries(states)?.find(
                    (s) => s[1] === geo.properties.name
                  ) || [];
                const idValue =
                  allStates?.find((s) => s.id === stateId[0])?.val || 0;

                return (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#210d4a"
                    geography={geo}
                    fill={`${colorScale(idValue)}`}
                    style={{
                      hover:{
                        fill: "#F53",
                      }
                    }}
                  />
                );
              })}
              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const cur = allStates.find((s) => s.val === geo.id);
                return (
                  <g key={geo.rsmKey + "-name"}>
                    {cur &&
                      centroid[0] > -160 &&
                      centroid[0] < -67 &&
                      (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                        <Marker coordinates={centroid}>
                          <text y="2" fontSize={14} textAnchor="middle">
                            {cur.id}
                          </text>
                        </Marker>
                      ) : (
                        <Annotation
                          subject={centroid}
                          dx={offsets[cur.id][0]}
                          dy={offsets[cur.id][1]}
                        >
                          <text x={4} fontSize={14} alignmentBaseline="middle">
                            {cur.id}
                          </text>
                        </Annotation>
                      ))}
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
