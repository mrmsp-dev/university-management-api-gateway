import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllSemesters);
router.get('/:id', AcademicSemesterController.getSingleSemester);
router.post(
	'/',
	validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
	auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
	AcademicSemesterController.createSemester
);


router.patch(
	'/:id',
	validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
	auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
	AcademicSemesterController.updateSemester
);

router.delete(
	'/:id',
	auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
	AcademicSemesterController.deleteSemester
);
export const AcademicSemesterRoutes = router;