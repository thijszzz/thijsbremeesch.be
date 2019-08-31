import React from "react"

const SignatureLogo = props => (
  <svg width={336} height={58} {...props}>
    <defs>
      <path id="prefix__a" d="M0 .476h335.536V58H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g>
        <mask id="prefix__b" fill="#fff">
          <use xlinkHref="#prefix__a" />
        </mask>
        <path
          d="M286.616 10.903c.402-.681.83-1.358 1.316-1.984.217-.28.565-.559.734-.86.177 2.218-.133 4.48-.423 6.712-1.187-.013-2.373-.027-3.559-.038.587-1.304 1.201-2.594 1.932-3.83M83.495 28.011c-1.724 1.008-5.819 3.343-3.987 5.831 1.019 1.384 3.25 1.74 4.813 1.991 3.515.565 7.127.751 10.675.996 7.418.512 14.847.85 22.235 1.718 4.3.505 8.55 1.273 12.827 1.922 1.087.164 5.696.511 4.838 2.006-.948 1.651-4.709 2.22-6.53 2.674a204.583 204.583 0 01-6.583 1.502c-8.027 1.726-16.111 3.206-24.222 4.492-22.152 3.51-45.115 6.07-67.54 3.965-5.09-.478-10.175-1.226-15.134-2.483-3.371-.853-10-2.025-11.615-5.418-3.37-7.082 8.207-11.853 13.01-13.806 12.48-5.078 25.938-7.66 39.327-9.188.013 2.414-.026 4.822-.088 7.202-.162 6.44-1.264 13.193-.464 19.62.208 1.67 2.187 1.214 1.982-.425-.285-2.294-.106-4.635.02-6.935.258-4.674.49-9.346.57-14.027.032-1.875.044-3.765.024-5.662.861-.092 1.72-.18 2.58-.264 12.503-1.217 25.045-2.088 37.593-2.799-4.48 2.814-9.75 4.406-14.331 7.088M290.918 14.8c.164-1.398.324-2.793.457-4.188.232-2.412-.301-6.71-3.836-4.603-1.667.994-2.767 3-3.676 4.62-.742 1.322-1.385 2.692-2.006 4.073-18.179-.157-36.36-.126-54.538.06-32.356.333-64.711 1.14-97.04 2.52-8.562.366-17.128.752-25.692 1.204.287-.314.572-.633.844-.972 7.036-8.785-8.447-13.013-14.561-14.41C79.596.529 67.709.219 56.192.622c-4.824.17-9.658.488-14.442 1.133-3.542.476-8.213.966-11.064 3.251-1.955 1.567-.693 3.395 1.327 4.023 1.447.45 2.722-1.274 1.024-1.802-.921-.286-.845-.345-.084-.915 1.586-1.185 3.997-1.61 5.951-1.998 3.83-.76 7.762-1.085 11.654-1.35 10.895-.744 21.98-.686 32.806.831 4.977.697 9.993 1.69 14.654 3.604 1.864.763 4.027 1.704 5.518 3.1 1.963 1.835.911 4.255-.573 6.04a19.107 19.107 0 01-2.113 2.155c-12.916.712-25.824 1.582-38.7 2.777-1.51.14-3.02.294-4.53.456-.105-4.163-.41-8.333-1.121-12.4-.29-1.654-2.27-1.218-1.983.424.7 4 .98 8.101 1.064 12.201-13.435 1.54-26.783 4.077-39.443 8.94C10.565 33.235-.363 37.41.01 44.924c.077 1.532.707 2.96 1.575 4.211 1.151 1.66 3.366 2.308 5.197 3.03 4.608 1.818 9.477 2.992 14.357 3.822 23.185 3.94 47.578 1.441 70.682-1.882a466.683 466.683 0 0027.963-4.873c4.823-.995 10.025-1.767 14.562-3.772 2.384-1.055 5.336-3.426 1.919-5.384-2.726-1.562-6.403-1.647-9.412-2.169a177.732 177.732 0 00-13.393-1.783c-7.691-.737-15.418-.99-23.113-1.668-1.264-.111-8.08-.005-8.596-1.567-.367-1.113 2.536-2.652 3.207-3.05 5.622-3.348 12.202-5.072 17.289-9.157a2603.3 2603.3 0 0119.365-.963c29.428-1.365 58.88-2.22 88.336-2.69 23.666-.378 47.339-.494 71.008-.3a74.46 74.46 0 01-1.635 3.496c-1.049 2.064-2.212 4.471-3.997 6.022-1.78 1.547-3.017.25-4.852-.598-2.8-1.291-6.311-.054-8.043 2.409a34.037 34.037 0 00-.703-.576c-.58-.46-1.195-.873-1.751-1.367-.235-.209-.559-.64-.885-1.042.604-1.221.437-2.268-1.516-2.576-1.253-.198-2.301.607-2.063 1.879.068.363.201.707.381 1.038-.333.485-.666.993-1.107 1.388-2.351 2.103-6.013 4.414-9.254 3.4-.707-.222-1.505-.564-2.113-1.036 1.306-1.834 2.51-4.542.642-5.511-2.62-1.359-4.912 3.225-4.071 5.2.06.142.133.28.212.415-2.13 1.864-5.342 1.918-8.009 1.51-.88-.136-1.975-.362-2.764-.863 1.166-.87 2.02-2.02 1.767-3.39-.258-1.399-1.936-2.564-3.35-2.075-1.89.653-2.434 3.081-1.864 4.916-1.2.518-2.434.633-3.73.458-1.661-.223-3.24-.898-4.767-1.555-2.462-1.059-5.064-2.676-7.868-1.998-1.51.366-3.842 1.837-4.625 3.163l-.273.22c-.048-.125-.088-.25-.112-.309-.31-.766-.84-1.484-1.55-1.93-1.37-.86-3.299-.82-4.73-.136-1.648.789-2.869 3.82-4.824 2.874-1.563-.757-2.184-2.732-3.895-3.494-2.176-.97-4.818-.605-7.04.047-2.145.63-3.99 1.768-5.688 3.187-1.981 1.657-3.069 3.292-5.153.413-.1-.14-.183-.269-.263-.397.935-.816 1.686-1.83 2.14-3.07.6-1.643-.237-2.974-2.069-2.89-3.292.15-3.814 2.815-3.023 5.366-2.64 1.632-5.777 1.586-8.517.246-3.951-1.93-7.375-4.774-11.985-5.2-5.145-.476-6.432 6.454-9.924 8.853-1.374.944.881 2.111 1.943 1.382 2.398-1.648 3.623-4.495 5.421-6.688 1.173-1.43 1.707-1.73 3.479-1.274 1.544.398 3.04 1.035 4.492 1.688 2.047.92 3.794 2.387 5.874 3.3 2.778 1.221 5.353 1.243 8.24.374.64-.193 1.264-.435 1.856-.726.647 1.075 1.494 1.974 2.398 2.429 3.914 1.968 7.109-3.097 10.142-4.52 1.662-.779 4.307-1.572 6.093-.869 1.29.508 1.885 1.81 2.843 2.712 1.501 1.412 3.81 2.041 5.665.933 2.072-1.237 3.715-5.034 5.683-1.543.813 1.444 1.886 2.097 3.54 1.259 1.132-.575 1.968-1.638 2.934-2.435 2.218-1.83 4.273-.626 6.592.41 3.349 1.498 7.007 2.931 10.71 1.922.366-.1.781-.241 1.215-.419 3.602 2.951 11.025 2.462 14.613-.248 1.34.91 3.07 1.462 4.4 1.634 2.766.359 5.876-1.146 8.12-2.578.508-.323 1.917-1.433 3.12-2.706 1.296 1.14 2.926 2.131 3.989 3.14a5.473 5.473 0 00-.086.905c-.014 2 2.674 4.81 4.01 2.054.528-1.088-.106-2.19-.762-3.073-.073-.098-.158-.188-.236-.283.174-.382.404-.742.654-1.068 3.027-3.948 5.734.637 9.282.149 4.887-.673 7.488-7.884 9.17-11.625l.312-.702c1.402.013 2.805.03 4.207.045-.596 5.14-2.012 11.521.962 16.076 2.04 3.125 4.634 5.751 7.934 7.556 1.112.609 3.33-.671 1.879-1.466-2.827-1.546-5.085-3.687-6.93-6.306-1.423-2.022-1.844-3.633-1.851-6.064-.01-3.264.32-6.517.692-9.764a2238.449 2238.449 0 0143.785.91c1.775.054 1.122-1.985-.394-2.031-14.382-.44-28.767-.73-43.156-.905z"
          fill="#090909"
          mask="url(#prefix__b)"
        />
      </g>
      <path
        d="M315.352 48c-1.369-.033-1.948 1.976-.538 2.178l.016.008.009.014c.14.186.079.06.193.262.688 1.211.523 3.046.417 4.394-.121 1.55 2.37 1.47 2.478.092.172-2.191.276-6.88-2.575-6.948"
        fill="#090909"
      />
    </g>
  </svg>
)

export default SignatureLogo
