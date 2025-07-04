'use client';

import React from 'react';

export default function LiveScoreCard() {
  const batters = [
    {
      name: 'Rohit Sharma',
      r: 45,
      b: 60,
      fours: 6,
      sixes: 1,
      sr: 75.0,
      thisBowler: '11(17)',
      last10: '26(34)',
      mat: 73,
      runs: 4716,
      hs: 245,
      ave: 36.84,
    },
    {
      name: 'Shubman Gill *',
      r: 30,
      b: 42,
      fours: 4,
      sixes: 0,
      sr: 71.4,
      thisBowler: '9(13)',
      last10: '15(28)',
      mat: 36,
      runs: 1900,
      hs: 129,
      ave: 47.5,
    },
  ];

  const bowlers = [
      {
    name: 'James Anderson',
    o: 8,
    m: 2,
    r: 21,
    w: 1,
    eco: 2.63,
    dots: 26,
    wd: 0,
    nb: 1,
    os: 69,
    fours: 4,
    sixes: 0,
    spell: '2-0-6-0',
    mat: 179,
    wkts: 700,
    bbi: '7/42',
    ave: 25.6,
  },
    {
      name: 'Chris Wokes',
     o: 8,
    m: 2,
    r: 21,
    w: 1,
    eco: 2.63,
    dots: 26,
    wd: 0,
    nb: 1,
    os: 69,
    fours: 4,
    sixes: 0,
    spell: '2-0-6-0',
    mat: 179,
    wkts: 700,
    bbi: '7/42',
    ave: 25.6,
    },
  ];

  // Grid column layout (desktop)
  const columnLayout = '2.5fr repeat(5, 1fr) repeat(2, 1.2fr) repeat(4, 1fr)';

  return (
    <div className="w-full max-w-[800px] rounded-md bg-[#2D0000] text-white px-3 py-4 overflow-hidden ml-4">
      <div className="overflow-x-auto">
        <div className="min-w-[720px] space-y-6">
          {/* Batters Table */}
          <div className="space-y-1 border-t border-[#492F2F]">
            <div
              className="grid border-b border-[#492F2F] text-[#8D7575] pb-[2px] text-[13px] font-medium"
              style={{ gridTemplateColumns: columnLayout }}
            >

                {/* First row */}

    <span 
      className="text-center border-l border-[#492F2F] mb-4 mt-2" 
      style={{ gridColumn: '9 / span 4' }}
    >
      Test Career
    </span>
              <span>Batters</span>
              <span className="text-center">R</span>
              <span className="text-center">B</span>
              <span className="text-center">4s</span>
              <span className="text-center">6s</span>
              <span className="text-center">SR</span>
              <span className="text-center border-l border-[#492F2F]">Bowler</span>
              <span className="text-center">Last 10</span>
              <span className="text-center border-l border-[#492F2F]">Mat</span>
              <span className="text-center">Runs</span>
              <span className="text-center">HS</span>
              <span className="text-center">Ave</span>
            </div>

            {batters.map((batter, index) => (
              <div
                key={index}
                className="grid text-[13px]"
                style={{
                  gridTemplateColumns: columnLayout,
                  minHeight: '30px',
                  alignItems: 'center',
                }}
              >
                <span className="truncate">{batter.name}</span>
                <span className="text-center">{batter.r}</span>
                <span className="text-center">{batter.b}</span>
                <span className="text-center">{batter.fours}</span>
                <span className="text-center">{batter.sixes}</span>
                <span className="text-center">{batter.sr.toFixed(1)}</span>
                <span className="text-center border-l border-[#492F2F]">{batter.thisBowler}</span>
                <span className="text-center">{batter.last10}</span>
                <span className="text-center border-l border-[#492F2F]">{batter.mat}</span>
                <span className="text-center">{batter.runs}</span>
                <span className="text-center">{batter.hs}</span>
                <span className="text-center">{batter.ave}</span>
              </div>
            ))}
          </div>

          {/* Bowlers Table */}
          <div className="space-y-1">
            <div
              className="grid border-b border-[#492F2F] text-[#8D7575] pb-[2px] text-[13px] font-medium"
              style={{ gridTemplateColumns: columnLayout }}
            >
              <span>Bowlers</span>
              <span className="text-center">O</span>
              <span className="text-center">M</span>
              <span className="text-center">R</span>
              <span className="text-center">W</span>
              <span className="text-center">ECO</span>
              <span className="text-center border-l border-[#492F2F]">Os</span>
              <span className="text-center">Spell</span>
              <span className="text-center border-l border-[#492F2F]">Mat</span>
              <span className="text-center">Wkts</span>
              <span className="text-center">BBI</span>
              <span className="text-center">Ave</span>
            </div>

            {bowlers.map((bowler, index) => (
              <div
                key={index}
                className="grid text-[13px]"
                style={{
                  gridTemplateColumns: columnLayout,
                  minHeight: '26px',
                  alignItems: 'center',
                }}
              >
                <span className="truncate">{bowler.name}</span>
                <span className="text-center">{bowler.o}</span>
                <span className="text-center">{bowler.m}</span>
                <span className="text-center">{bowler.r}</span>
                <span className="text-center">{bowler.w}</span>
                <span className="text-center">{bowler.eco.toFixed(2)}</span>
                <span className="text-center border-l border-[#492F2F]">{bowler.os}</span>
                <span className="text-center">{bowler.spell}</span>
                <span className="text-center border-l border-[#492F2F]">{bowler.mat}</span>
                <span className="text-center">{bowler.wkts}</span>
                <span className="text-center">{bowler.bbi}</span>
                <span className="text-center">{bowler.ave}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
