import Head from "next/head";
import Layout from "../../components/layout";
import Dragon from "../../components/dragon";
import Rocket from "../../components/rocket";
import styles from "../../styles/List.module.css";

export default function spacecrafts() {
  const dragon = [
    {
      heat_shield: {
        material: "PICA-X",
        size_meters: 3.6,
        temp_degrees: 3000,
        dev_partner: "NASA",
      },
      launch_payload_mass: {
        kg: 6000,
        lb: 13228,
      },
      launch_payload_vol: {
        cubic_meters: 25,
        cubic_feet: 883,
      },
      return_payload_mass: {
        kg: 3000,
        lb: 6614,
      },
      return_payload_vol: {
        cubic_meters: 11,
        cubic_feet: 388,
      },
      pressurized_capsule: {
        payload_volume: {
          cubic_meters: 11,
          cubic_feet: 388,
        },
      },
      trunk: {
        trunk_volume: {
          cubic_meters: 14,
          cubic_feet: 494,
        },
        cargo: {
          solar_array: 2,
          unpressurized_cargo: true,
        },
      },
      height_w_trunk: {
        meters: 7.2,
        feet: 23.6,
      },
      diameter: {
        meters: 3.7,
        feet: 12,
      },
      first_flight: "2010-12-08",
      flickr_images: [
        "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2015_-_04_crs5_dragon_orbit13.jpg?itok=9p8_l7UP",
        "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2012_-_4_dragon_grapple_cots2-1.jpg?itok=R2-SeuMX",
        "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
        "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg",
      ],
      name: "Dragon 1",
      type: "capsule",
      active: true,
      crew_capacity: 0,
      sidewall_angle_deg: 15,
      orbit_duration_yr: 2,
      dry_mass_kg: 4200,
      dry_mass_lb: 9300,
      thrusters: [
        {
          type: "Draco",
          amount: 18,
          pods: 4,
          fuel_1: "nitrogen tetroxide",
          fuel_2: "monomethylhydrazine",
          isp: 300,
          thrust: {
            kN: 0.4,
            lbf: 90,
          },
        },
      ],
      wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Dragon",
      description:
        "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
      id: "5e9d058759b1ff74a7ad5f8f",
    },
    {
      heat_shield: {
        material: "PICA-X",
        size_meters: 3.6,
        temp_degrees: 3000,
        dev_partner: "NASA",
      },
      launch_payload_mass: {
        kg: 6000,
        lb: 13228,
      },
      launch_payload_vol: {
        cubic_meters: 25,
        cubic_feet: 883,
      },
      return_payload_mass: {
        kg: 3000,
        lb: 6614,
      },
      return_payload_vol: {
        cubic_meters: 11,
        cubic_feet: 388,
      },
      pressurized_capsule: {
        payload_volume: {
          cubic_meters: 11,
          cubic_feet: 388,
        },
      },
      trunk: {
        trunk_volume: {
          cubic_meters: 14,
          cubic_feet: 494,
        },
        cargo: {
          solar_array: 2,
          unpressurized_cargo: true,
        },
      },
      height_w_trunk: {
        meters: 7.2,
        feet: 23.6,
      },
      diameter: {
        meters: 3.7,
        feet: 12,
      },
      first_flight: "2010-12-08",
      flickr_images: [
        "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2015_-_04_crs5_dragon_orbit13.jpg?itok=9p8_l7UP",
        "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2012_-_4_dragon_grapple_cots2-1.jpg?itok=R2-SeuMX",
        "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
        "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg",
      ],
      name: "Dragon 1",
      type: "capsule",
      active: true,
      crew_capacity: 0,
      sidewall_angle_deg: 15,
      orbit_duration_yr: 2,
      dry_mass_kg: 4200,
      dry_mass_lb: 9300,
      thrusters: [
        {
          type: "Draco",
          amount: 18,
          pods: 4,
          fuel_1: "nitrogen tetroxide",
          fuel_2: "monomethylhydrazine",
          isp: 300,
          thrust: {
            kN: 0.4,
            lbf: 90,
          },
        },
      ],
      wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Dragon",
      description:
        "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
      id: "5e9d058759b1ff74a7ad5f8f",
    },
  ];

  const rockets = [
    {
      height: {
        meters: 70,
        feet: 229.6,
      },
      diameter: {
        meters: 12.2,
        feet: 39.9,
      },
      mass: {
        kg: 1420788,
        lb: 3125735,
      },
      first_stage: {
        thrust_sea_level: {
          kN: 22819,
          lbf: 5130000,
        },
        thrust_vacuum: {
          kN: 24681,
          lbf: 5548500,
        },
        reusable: true,
        engines: 27,
        fuel_amount_tons: 1155,
        burn_time_sec: 162,
      },
      second_stage: {
        thrust: {
          kN: 934,
          lbf: 210000,
        },
        payloads: {
          composite_fairing: {
            height: {
              meters: 13.1,
              feet: 43,
            },
            diameter: {
              meters: 5.2,
              feet: 17.1,
            },
          },
          option_1: "dragon",
        },
        reusable: false,
        engines: 1,
        fuel_amount_tons: 90,
        burn_time_sec: 397,
      },
      engines: {
        isp: {
          sea_level: 288,
          vacuum: 312,
        },
        thrust_sea_level: {
          kN: 845,
          lbf: 190000,
        },
        thrust_vacuum: {
          kN: 914,
          lbf: 205500,
        },
        number: 27,
        type: "merlin",
        version: "1D+",
        layout: "octaweb",
        engine_loss_max: 6,
        propellant_1: "liquid oxygen",
        propellant_2: "RP-1 kerosene",
        thrust_to_weight: 180.1,
      },
      landing_legs: {
        number: 12,
        material: "carbon fiber",
      },
      payload_weights: [
        {
          id: "leo",
          name: "Low Earth Orbit",
          kg: 63800,
          lb: 140660,
        },
        {
          id: "gto",
          name: "Geosynchronous Transfer Orbit",
          kg: 26700,
          lb: 58860,
        },
        {
          id: "mars",
          name: "Mars Orbit",
          kg: 16800,
          lb: 37040,
        },
        {
          id: "pluto",
          name: "Pluto Orbit",
          kg: 3500,
          lb: 7720,
        },
      ],
      flickr_images: [
        "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
        "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
        "https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg",
        "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg",
      ],
      name: "Falcon Heavy",
      type: "rocket",
      active: true,
      stages: 2,
      boosters: 2,
      cost_per_launch: 90000000,
      success_rate_pct: 100,
      first_flight: "2018-02-06",
      country: "United States",
      company: "SpaceX",
      wikipedia: "https://en.wikipedia.org/wiki/Falcon_Heavy",
      description:
        "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
      id: "5e9d0d95eda69974db09d1ed",
    },
    {
      height: {
        meters: 70,
        feet: 229.6,
      },
      diameter: {
        meters: 12.2,
        feet: 39.9,
      },
      mass: {
        kg: 1420788,
        lb: 3125735,
      },
      first_stage: {
        thrust_sea_level: {
          kN: 22819,
          lbf: 5130000,
        },
        thrust_vacuum: {
          kN: 24681,
          lbf: 5548500,
        },
        reusable: true,
        engines: 27,
        fuel_amount_tons: 1155,
        burn_time_sec: 162,
      },
      second_stage: {
        thrust: {
          kN: 934,
          lbf: 210000,
        },
        payloads: {
          composite_fairing: {
            height: {
              meters: 13.1,
              feet: 43,
            },
            diameter: {
              meters: 5.2,
              feet: 17.1,
            },
          },
          option_1: "dragon",
        },
        reusable: false,
        engines: 1,
        fuel_amount_tons: 90,
        burn_time_sec: 397,
      },
      engines: {
        isp: {
          sea_level: 288,
          vacuum: 312,
        },
        thrust_sea_level: {
          kN: 845,
          lbf: 190000,
        },
        thrust_vacuum: {
          kN: 914,
          lbf: 205500,
        },
        number: 27,
        type: "merlin",
        version: "1D+",
        layout: "octaweb",
        engine_loss_max: 6,
        propellant_1: "liquid oxygen",
        propellant_2: "RP-1 kerosene",
        thrust_to_weight: 180.1,
      },
      landing_legs: {
        number: 12,
        material: "carbon fiber",
      },
      payload_weights: [
        {
          id: "leo",
          name: "Low Earth Orbit",
          kg: 63800,
          lb: 140660,
        },
        {
          id: "gto",
          name: "Geosynchronous Transfer Orbit",
          kg: 26700,
          lb: 58860,
        },
        {
          id: "mars",
          name: "Mars Orbit",
          kg: 16800,
          lb: 37040,
        },
        {
          id: "pluto",
          name: "Pluto Orbit",
          kg: 3500,
          lb: 7720,
        },
      ],
      flickr_images: [
        "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
        "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
        "https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg",
        "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg",
      ],
      name: "Falcon Heavy",
      type: "rocket",
      active: true,
      stages: 2,
      boosters: 2,
      cost_per_launch: 90000000,
      success_rate_pct: 100,
      first_flight: "2018-02-06",
      country: "United States",
      company: "SpaceX",
      wikipedia: "https://en.wikipedia.org/wiki/Falcon_Heavy",
      description:
        "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
      id: "5e9d0d95eda69974db09d1ed",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Dragons and Rockets</title>
        <link rel="icon" href="../../spacecraft.svg" />
      </Head>
      <article className={styles.content}>
        {dragon.map((dragonData) => {
          return <Dragon data={dragonData}></Dragon>;
        })}
        {rockets.map((rocketData) => {
          return <Rocket data={rocketData}></Rocket>;
        })}
      </article>
    </Layout>
  );
}
