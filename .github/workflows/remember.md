
      - name: Deploy API to Heroku 🚀
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "vigilant-api-staging"
          heroku_email: "alexander.vu.tuyet@gmail.com"
          branch: api-stage
