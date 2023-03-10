/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

const plugins = []

plugins.push(withPWA)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales:['en','es'],
    defaultLocale:'es'
  }
}

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig)