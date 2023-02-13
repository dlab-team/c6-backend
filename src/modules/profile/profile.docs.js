/**
 * @swagger
 * components:
 *  schemas:
 *    Profile:
 *      type: object
 *      properties:
 *        profile:
 *          type: object
 *          properties:
 *            fullName:
 *              type: string
 *            email:
 *              type: string
 *            phone:
 *              type: string
 *            gender:
 *              type: string
 *              enum: ['masculino', 'femenino', 'otro']
 *            avatar:
 *              type: string
 *            cityId:
 *              type: integer
 *              minimum: 1
 *        educationalProfile:
 *          type: object
 *          properties:
 *            educationalLevel:
 *              type: string
 *            currentlyEducationalSituation:
 *              type: string
 *              enum: [ 'Bootcamp', 'Diplomados','Universidad', 'Cursos','Otros']
 *            englishLevel:
 *              type: string
 *              enum: ['Básico', 'Intermedio', 'Avanzado']
 *            anotherSkills:
 *              type: string
 *            studies:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  institution:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                      institutionTypeId:
 *                        type: integer
 *                        minimum: 1
 *        workProfile:
 *          type: object
 *          properties:
 *            employmentSituation:
 *              type: string
 *            cvUrl:
 *              type: string
 *            linkedinUrl:
 *              type: string
 *            githubUrl:
 *              type: string
 *            websiteUrl:
 *              type: string
 *            projectDescription:
 *              type: string
 *            yearsOfExperiencie:
 *              type: string
 *            dreamJobDescription:
 *              type: string
 *            availability:
 *              type: string
 *            locationAvailable:
 *              type: string
 *            workVisa:
 *              type: string
 *            charges:
 *              type: array
 *              items:
 *                type: integer
 *                minimum: 1
 *                description: the chargeId.
 *            skills:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  skillId:
 *                    type: integer
 *                    minimum: 1
 *                  level:
 *                    type: integer
 *                    minimum: 1
 *      required:
 *        - profile
 *        - educationalProfile
 *        - workProfile
 */

/**
 * @swagger
 * /api/profiles:
 *  post:
 *      summary: create or update the Profile User full (Profile, Work Profile, Edcuational Profile)
 *      tags: [Profile]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Profile'
 *      responses:
 *          200:
 *              description: 'Postulacion registrada correctamente'
 *          400:
 *              description: 'Falló el registro de los datos'
 */
