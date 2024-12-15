# pf

- 1-npx create-next-app@latest landing-particles --typescript --eslint
- copia este archivo `landing-particles/data.tsx`

  - instala el paquete de `https://lucide.dev/guide/packages/lucide-react`

    ```tm
    npm install lucide-react

    ```

- # 2 modifico el home

  ```ts
  'use client';

  import { CoverParticles } from '@/components/cover-particles';
  import Introduction from '@/components/introduction';
  import TransitionPage from '@/components/transition-page';

  export default function Home() {
    return (
      <main>
        {/* <TransitionPage /> */}
        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
          <CoverParticles />
          {/*
            <Introduction /> */}
        </div>
      </main>
    );
  }
  ```

  - ## 2.2 modifico el layout que se encarga de llamar al page.tsx

    - #### UBICACION : `landing-particles/app/layout.tsx`

    ```tsx
    import type { Metadata } from 'next';
    import { Urbanist } from 'next/font/google';
    import './globals.css';

    const urbanist = Urbanist({ subsets: ['latin'] });

    export const metadata: Metadata = {
      title: 'Kenneth Puliche Correa :',
      description: 'Portfolio created with Next.js , react, Tailwind, Typescript',
    };

    export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
      return (
        <html lang="en">
          <body className={urbanist.className}>{children} </body>
        </html>
      );
    }
    ```

  - ## 2.3 modifico el page

    - #### UBICACION : `landing-particles/app/page.tsx`

    ```tsx
    'use client';

    import { CoverParticles } from '@/components/cover-particles';

    // import Introduction from '@/components/introduction';
    // import TransitionPage from '@/components/transition-page';

    export default function Home() {
      return (
        <main>
          {/* <TransitionPage /> */}
          <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
            <CoverParticles />
            {/*
              <Introduction /> */}
          </div>
        </main>
      );
    }
    ```

  - ## 2.4 modifico el `landing-particles/tailwind.config.ts`

    - ```ts
      import type { Config } from 'tailwindcss';

      export default {
        content: [
          './pages/**/*.{js,ts,jsx,tsx,mdx}',
          './components/**/*.{js,ts,jsx,tsx,mdx}',
          './app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        theme: {
          extend: {
            colors: {
              secondary: '#f5741c',
              darkBG: '#131424',

              background: 'var(--background)',
              foreground: 'var(--foreground)',
            },
            backgroundImage: {
              'gradient-cover':
                'linear-gradient(90.21deg, #f0fc1480 -5.91%, rgba(74,47,189,0.5)111.58%)',
            },
          },
        },
        plugins: [],
      } satisfies Config;
      ```

  - ## 2.5 modifico el css y el background:

    - #### ubicacion: `landing-particles/app/globals.css`

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    html {
      /* height: 100%; */
    }
    html,
    body {
      /* height: 100%; */
      color: #fff;
      background: #1f1934;
    }

    main {
      background: #393a47;
      height: 100vh;
      height: 100dvh;
    }

    .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
    .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
      background-color: #f5741c;
    }

    @layer utilities {
      .text-balance {
        text-wrap: balance;
      }
    }
    ```

- # 3 creo el archivo de particles para el fondo dinamico

  - #### ubicacion: `landing-particles/components/cover-particles.tsx`

  - voy a ts particles
    ``
    [@tsparticles/react](https://www.npmjs.com/package/@tsparticles/react)

  instalo:
  `npm install @tsparticles/react`

  copio todo el `JavaScript support - url` en el archivo `landing-particles/components/cover-particles.tsx`

  - intalar `tsparticles/slim`

    ```terminal
     npm i @tsparticles/slim
    ```

  - importante usar `'use client'`
  - se usa `<div className="w-[0px]"> ` para solucionar un pequeño bug qu etiene ese paqueter

  ```ts
  'use client';

  import { useEffect, useState } from 'react';
  import { loadSlim } from '@tsparticles/slim';
  import Particles, { initParticlesEngine } from '@tsparticles/react';

  export const CoverParticles = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
    return (
      init && (
        <div className="w-[0px]">
          <Particles
            id="tsparticles"
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push',
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse',
                  },
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: '#ffffff',
                },
                links: {
                  color: '#ffffff',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                    default: 'bounce',
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )
    );
  };
  ```

- # 4- `transiciones dinamicas con  `FramerMotion`

  - ## 4.0 instalacion del framermotion: `https://motion.dev/docs`

    - instalo motion para hoy 15 dic 2024 `npm install motion`

  - ## 4.1 primero creo el componente que permite darle caracteristicas a las transiciones

    - ### ubicacio: `landing-particles/utils/motion-transitions.tsx`

    ```tsx
    export const transitionVariantsPage = {
      initial: {
        x: '100%',
        width: '100%',
      },
      animate: {
        x: '0%',
        width: '0%',
      },
      exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%'],
      },
    };

    export const motionTransitionsAbout = {
      initial: {
        opacity: 0,
        bottom: '5rem',
        transform: 'translateY(200px)',
      },
      transition: {
        duration: 2.3,
        type: 'tween',
        ease: [0.25, 0.6, 0.3, 0.8],
      },
      animate: {
        opacity: 1,
        transform: 'translateY(0px)',
      },
    };

    export const fadeIn = (position: string) => {
      return {
        visible: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 1.4,
            delay: 0.5,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        },
        hidden: {
          y: position === 'bottom' ? -80 : 0,
          x: position === 'right' ? 80 : 0,
          opacity: 0,
          transition: {
            type: 'tween',
            duration: 0.5,
            delay: 0.5,
            ease: [0.25, 0.25, 0.25, 0.25],
          },
        },
      };
    };
    ```

- # 5 creo UN archivo que use esas caractersticas y genere las transiciones y envuelva los children que usa esas trancisiones, para este caso es el transition-component

  - `landing-particles/components/transition-component.tsx`

    ```tsx
    'use client';

    import { motion } from 'framer-motion';
    import { fadeIn } from '@/utils/motion-transitions';

    export type MotionTransitionProps = {
      children: React.ReactNode;
      className?: string;
      position: 'right' | 'bottom';
    };

    export function MotionTransition(props: MotionTransitionProps) {
      const { children, className, position } = props;

      return (
        <motion.div
          variants={fadeIn(position)}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={className}
        >
          {children}
        </motion.div>
      );
    }
    ```

- # 6 - creo el componente Navbar que usara la trnasicion creada`transition-component.tsx`

  - #### ubicacion : `landing-particles/components/navbar.tsx`

    ```tsx
    'use client';

    import Link from 'next/link';
    import { itemsNavbar } from '@/data';
    import { MotionTransition } from './transition-component';
    import { usePathname } from 'next/navigation';

    const Navbar = () => {
      const router = usePathname(); //---permite obtener la ruta actual en la que se encuentra el usuario

      return (
        <MotionTransition
          position="right"
          className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
        >
          <nav>
            <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
              {itemsNavbar.map((item) => (
                <div
                  key={item.id}
                  className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-bermuda ${
                    router === item.link && 'bg-secondary'
                  }`}
                  data-tooltip-target="tooltip-default"
                >
                  <Link href={item.link}>{item.icon} </Link>
                </div>
              ))}
            </div>
          </nav>
        </MotionTransition>
      );
    };

    export default Navbar;
    ```

- # 7- ejemplo para transicion de paginas:

  creacion del componente que permite la transicion de las paginas que usa las caracteristicas del punto `- ## 4.1` y que a su vez genere las transiciones y envuelva los children que usa esas trancisiones como en el punto `- # 5 `

  - en la practica estuve vieno que hay 2 maneras, se podria pasar un `children` o la otra `sin children`

  - ## 7.2 children seria asi :

    - creo el elemento que usa las trnasisciones y recibe el children
    - ##### ubicacion: `landing-particles/components/transition-page.tsx`

      ```tsx
      'use client';

      import { transitionVariantsPage } from '@/utils/motion-transitions';
      import { AnimatePresence, motion } from 'framer-motion';

      //-------aqui lo agregue como children sin emabargo se podria en esta ocasion omitir el children y usarlo simplemente al principio del "page.tsx"
      export type TransitionPageProps = {
        children: React.ReactNode;
      };
      const TransitionPage = ({ children }: TransitionPageProps) => {
        return (
          <AnimatePresence mode="wait">
            <div>
              <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
                variants={transitionVariantsPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
              >
                {/* ------------ejemplo usando el children  */}
                {children}
              </motion.div>
            </div>
          </AnimatePresence>
        );
      };

      export default TransitionPage;
      ```

      le cambie el estilo del main:

    - ##### ubicacion: `landing-particles/app/globals.css`

      ```css
      main {
        background: linear-gradient(90.21deg, #f0fc1480 -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
        height: 100vh;
        height: 100dvh;
      }
      ```

    - **_hago el llamado para esta ocasion al `page.tsx`_**
    - #### ubicacion: `landing-particles/app/page.tsx`

      ```tsx
      'use client';

      import { CoverParticles } from '@/components/cover-particles';
      import TransitionPage from '@/components/transition-page';

      // import Introduction from '@/components/introduction';

      export default function Home() {
        return (
          <main>
            {/* -------------envuelvo en el TransitionPage los childrens */}
            <TransitionPage>
              <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
                <CoverParticles />
                {/*
              <Introduction /> */}
              </div>
            </TransitionPage>
          </main>
        );
      }
      ```

  - ## 7.3 sin el children seria asi :

    - #### el elemento que usa las trnasiciones

      - ##### ubicacion: landing-particles/components/transition-page.tsx

      ```tsx
      'use client';

      import { transitionVariantsPage } from '@/utils/motion-transitions';
      import { AnimatePresence, motion } from 'framer-motion';

      //-------quito el children y usarlo simplemente al principio del "page.tsx"

      const TransitionPage = () => {
        return (
          <AnimatePresence mode="wait">
            <div>
              <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
                variants={transitionVariantsPage}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
              >
                {/* ------------Ya no usando el children  */}
              </motion.div>
            </div>
          </AnimatePresence>
        );
      };

      export default TransitionPage;
      ```

      - **_hago el llamado para esta ocasion al `page.tsx`_**

      - #### ubicacion: `landing-particles/app/page.tsx`

        ```tsx
        'use client';

        import { CoverParticles } from '@/components/cover-particles';
        import TransitionPage from '@/components/transition-page';

        // import Introduction from '@/components/introduction';

        export default function Home() {
          return (
            <main>
              {/* -------------No envuelvo en el TransitionPage los childrens */}
              <TransitionPage />
              <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
                <CoverParticles />
                {/*
                <Introduction /> */}
              </div>
            </main>
          );
        }
        ```

- # 8 ) creacion del `Header`
